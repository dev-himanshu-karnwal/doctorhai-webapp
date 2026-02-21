# ============================================================

# CURSOR RULES — Next.js + Tailwind CSS + TanStack Query

# Production-Grade Frontend — Modular Architecture

# ============================================================

# ─────────────────────────────────────────────

# 0. PHILOSOPHY & MINDSET

# ─────────────────────────────────────────────

- UI is a function of state. Model state correctly and the UI writes itself.
- Components should be so small and focused that reading them requires zero explanation.
- Prefer composition over configuration. Prefer convention over decision fatigue.
- Every abstraction must earn its place — complexity introduced early is debt paid forever.
- Accessibility is not optional. Every interactive element must be keyboard and screen-reader navigable.
- Performance is a feature. Treat every unnecessary re-render as a bug.
- Write code for the developer who maintains it at 11pm during an incident.
- Design systems thinking first: build components that compose, not components that configure.

# ─────────────────────────────────────────────

# 1. FOLDER STRUCTURE — MODULAR ARCHITECTURE

# ─────────────────────────────────────────────

```
src/
├── app/                              # Next.js App Router (routing only)
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── register/
│   │       └── page.tsx
│   ├── (dashboard)/
│   │   ├── layout.tsx
│   │   └── [feature]/
│   │       ├── page.tsx
│   │       └── [id]/
│   │           └── page.tsx
│   ├── api/                          # Route handlers
│   ├── layout.tsx
│   ├── globals.css
│   └── not-found.tsx
│
├── modules/                          # Feature modules (bounded contexts)
│   └── [feature]/
│       ├── components/               # Feature-specific components
│       │   ├── [feature]-list.tsx
│       │   ├── [feature]-card.tsx
│       │   └── [feature]-form.tsx
│       ├── hooks/                    # Feature-specific hooks
│       │   ├── use-[feature].ts
│       │   └── use-[feature]-form.ts
│       ├── queries/                  # TanStack Query definitions
│       │   ├── [feature].queries.ts
│       │   └── [feature].mutations.ts
│       ├── api/                      # API call functions (no React)
│       │   └── [feature].api.ts
│       ├── stores/                   # Zustand stores (if applicable)
│       │   └── [feature].store.ts
│       ├── types/
│       │   └── [feature].types.ts
│       ├── utils/
│       │   └── [feature].utils.ts
│       ├── schemas/                  # Zod schemas
│       │   └── [feature].schema.ts
│       └── index.ts                  # Public barrel export
│
├── components/                       # Shared design system
│   ├── ui/                           # Primitive components (shadcn-style)
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── dialog.tsx
│   │   └── ...
│   ├── layout/
│   │   ├── sidebar.tsx
│   │   ├── header.tsx
│   │   └── page-container.tsx
│   ├── feedback/
│   │   ├── error-boundary.tsx
│   │   ├── empty-state.tsx
│   │   └── loading-skeleton.tsx
│   └── providers/
│       ├── query-provider.tsx
│       ├── auth-provider.tsx
│       └── theme-provider.tsx
│
├── hooks/                            # Global custom hooks
│   ├── use-debounce.ts
│   ├── use-local-storage.ts
│   ├── use-media-query.ts
│   ├── use-outside-click.ts
│   ├── use-previous.ts
│   └── use-intersection-observer.ts
│
├── lib/                              # Infrastructure utilities
│   ├── axios.ts                      # Axios instance with interceptors
│   ├── query-client.ts               # TanStack QueryClient config
│   ├── cn.ts                         # clsx + tailwind-merge utility
│   └── format.ts                     # Date, number, currency formatters
│
├── config/
│   ├── routes.ts                     # Typed route constants
│   ├── env.ts                        # Zod-validated env vars
│   └── query-keys.ts                 # Global query key factory
│
├── types/
│   ├── api.types.ts                  # Shared API types (responses, errors)
│   ├── common.types.ts               # Shared utility types
│   └── next.d.ts                     # Next.js type augmentations
│
├── styles/
│   └── globals.css                   # Tailwind base + CSS variables
│
└── middleware.ts                     # Next.js middleware (auth, redirects)
```

## Rules

- `app/` contains ONLY routing (layout, page, loading, error, not-found files).
- Pages are thin: import a feature module component and render it. No logic in pages.
- `modules/` owns everything related to a feature — components, hooks, queries, API, types.
- `components/` is the shared design system — NO business logic.
- Cross-module imports are forbidden. Modules communicate via shared state or URL.
- Every module has an `index.ts` barrel file that controls its public API.

# ─────────────────────────────────────────────

# 2. COMPONENT ARCHITECTURE & PATTERNS

# ─────────────────────────────────────────────

## 2.1 Compound Component Pattern

Use for components with multiple related sub-parts that share implicit state.

```tsx
// modules/data-table/components/data-table.tsx
interface DataTableContextValue<T> {
  data: T[];
  columns: ColumnDef<T>[];
  selectedRows: Set<string>;
  toggleRow: (id: string) => void;
}

const DataTableContext = createContext<DataTableContextValue<unknown> | null>(
  null
);

function useDataTableContext<T>() {
  const ctx = useContext(
    DataTableContext as Context<DataTableContextValue<T> | null>
  );
  if (!ctx)
    throw new Error("useDataTableContext must be used within <DataTable>");
  return ctx;
}

function DataTable<T>({ data, columns, children }: DataTableProps<T>) {
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  const toggleRow = useCallback((id: string) => {
    setSelectedRows((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  return (
    <DataTableContext.Provider
      value={{ data, columns, selectedRows, toggleRow } as any}
    >
      <div className="rounded-md border">{children}</div>
    </DataTableContext.Provider>
  );
}

DataTable.Header = DataTableHeader;
DataTable.Body = DataTableBody;
DataTable.Footer = DataTableFooter;
DataTable.Toolbar = DataTableToolbar;

export { DataTable };

// Usage
<DataTable data={users} columns={columns}>
  <DataTable.Toolbar />
  <DataTable.Header />
  <DataTable.Body />
  <DataTable.Footer />
</DataTable>;
```

When to use: Tabs, Accordion, DataTable, Form, Modal with parts, Select, Menu, etc.

## 2.2 Higher-Order Component (HOC) Pattern

Use for cross-cutting concerns: auth, permissions, analytics, feature flags.

```tsx
// components/hoc/with-auth.tsx
export function withAuth<P extends object>(
  Component: ComponentType<P>,
  options: { requiredRole?: Role; redirectTo?: string } = {}
) {
  const WrappedComponent = (props: P) => {
    const { user, isLoading } = useAuth();
    const router = useRouter();

    if (isLoading) return <PageSkeleton />;
    if (!user) {
      router.push(options.redirectTo ?? "/login");
      return null;
    }
    if (options.requiredRole && !user.roles.includes(options.requiredRole)) {
      return <UnauthorizedPage />;
    }
    return <Component {...props} />;
  };

  WrappedComponent.displayName = `withAuth(${Component.displayName ?? Component.name})`;
  return WrappedComponent;
}

// components/hoc/with-error-boundary.tsx
export function withErrorBoundary<P extends object>(
  Component: ComponentType<P>,
  fallback?: ReactNode
) {
  const WrappedComponent = (props: P) => (
    <ErrorBoundary fallback={fallback ?? <DefaultErrorFallback />}>
      <Component {...props} />
    </ErrorBoundary>
  );
  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName ?? Component.name})`;
  return WrappedComponent;
}

// components/hoc/with-suspense.tsx
export function withSuspense<P extends object>(
  Component: ComponentType<P>,
  fallback?: ReactNode
) {
  const WrappedComponent = (props: P) => (
    <Suspense fallback={fallback ?? <ContentSkeleton />}>
      <Component {...props} />
    </Suspense>
  );
  WrappedComponent.displayName = `withSuspense(${Component.displayName ?? Component.name})`;
  return WrappedComponent;
}
```

Rules:

- Always set `displayName` on wrapped components (dev tools).
- HOCs must be pure — no side effects in the HOC factory.
- Prefer hooks over HOCs for simple shared logic.
- HOCs are for structural/rendering concerns; hooks for logic.

## 2.3 Render Props Pattern

Use sparingly — prefer hooks. Acceptable for components that need to expose complex state.

```tsx
interface RenderProps<T> {
  data: T;
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
}

interface AsyncBoundaryProps<T> {
  query: UseQueryResult<T>;
  children: (props: RenderProps<T>) => ReactNode;
  loadingFallback?: ReactNode;
  errorFallback?: (error: Error) => ReactNode;
}

function AsyncBoundary<T>({
  query,
  children,
  loadingFallback,
  errorFallback,
}: AsyncBoundaryProps<T>) {
  if (query.isLoading) return <>{loadingFallback ?? <Skeleton />}</>;
  if (query.isError)
    return <>{errorFallback?.(query.error as Error) ?? <ErrorState />}</>;
  if (!query.data) return <EmptyState />;
  return (
    <>
      {children({
        data: query.data,
        isLoading: false,
        error: null,
        refetch: query.refetch,
      })}
    </>
  );
}
```

## 2.4 Container / Presentational Pattern

- **Container** (smart): fetches data, handles state, passes props down.
- **Presentational** (dumb): receives props, renders UI, has no side effects.

```tsx
// Container — in modules/users/components/
export function UserProfileContainer({ userId }: { userId: string }) {
  const { data: user, isLoading } = useUser(userId);
  const { mutate: updateUser } = useUpdateUser();
  if (isLoading) return <UserProfileSkeleton />;
  if (!user) return <UserNotFound />;
  return <UserProfileView user={user} onUpdate={updateUser} />;
}

// Presentational — pure, testable, storybook-friendly
interface UserProfileViewProps {
  user: User;
  onUpdate: (data: UpdateUserDto) => void;
}
export function UserProfileView({ user, onUpdate }: UserProfileViewProps) { ... }
```

## 2.5 Polymorphic Component Pattern

Allow components to render as different HTML elements or components:

```tsx
type PolymorphicRef<C extends ElementType> = ComponentPropsWithRef<C>['ref'];
type AsProp<C extends ElementType> = { as?: C };
type PolymorphicProps<C extends ElementType, Props = Record<string, never>> =
  AsProp<C> & Omit<ComponentPropsWithoutRef<C>, keyof Props> & Props;

interface TextOwnProps { variant?: 'h1' | 'h2' | 'body' | 'caption'; }
type TextProps<C extends ElementType> = PolymorphicProps<C, TextOwnProps>;

function Text<C extends ElementType = 'p'>({ as, variant = 'body', className, ...props }: TextProps<C>) {
  const Component = as ?? 'p';
  return <Component className={cn(textVariants({ variant }), className)} {...props} />;
}

// Usage
<Text as="h1" variant="h1">Title</Text>
<Text as="label" htmlFor="email">Email</Text>
```

# ─────────────────────────────────────────────

# 3. CUSTOM HOOKS — RULES & PATTERNS

# ─────────────────────────────────────────────

## 3.1 Rules

- One hook = one concern. If a hook exceeds ~80 lines, split it.
- Hooks are pure logic — no JSX, no direct DOM manipulation (use `useEffect` for that).
- Always return a stable object reference when returning multiple values. Use `useMemo`.
- Custom hooks must start with `use`.
- Name hooks after what they represent, not how they work: `useCart` not `useCartReducerWithLocalStorage`.
- Every hook must handle loading, error, and empty states.

## 3.2 Essential Hook Patterns

```tsx
// hooks/use-debounce.ts
export function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounced;
}

// hooks/use-previous.ts
export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

// hooks/use-local-storage.ts
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [stored, setStored] = useState<T>(() => {
    if (typeof window === "undefined") return initialValue;
    try {
      return (
        JSON.parse(window.localStorage.getItem(key) ?? "null") ?? initialValue
      );
    } catch {
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      setStored((prev) => {
        const next = value instanceof Function ? value(prev) : value;
        window.localStorage.setItem(key, JSON.stringify(next));
        return next;
      });
    },
    [key]
  );

  return [stored, setValue] as const;
}

// hooks/use-outside-click.ts
export function useOutsideClick<T extends HTMLElement>(handler: () => void) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const listener = (e: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(e.target as Node)) return;
      handler();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [handler]);
  return ref;
}

// hooks/use-intersection-observer.ts
export function useIntersectionObserver(
  options: IntersectionObserverInit = {}
): [RefCallback<Element>, boolean] {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref: RefCallback<Element> = useCallback((node) => {
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, options);
    observer.observe(node);
    return () => observer.disconnect();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return [ref, isIntersecting];
}
```

## 3.3 Feature-Level Hook Pattern

```tsx
// modules/users/hooks/use-user-list.ts
export function useUserList(filters: UserFilters) {
  const debouncedSearch = useDebounce(filters.search, 300);

  const query = useUsersQuery({ ...filters, search: debouncedSearch });
  const deleteMutation = useDeleteUserMutation();

  const handleDelete = useCallback(
    async (id: string) => {
      await deleteMutation.mutateAsync(id);
    },
    [deleteMutation]
  );

  return {
    users: query.data?.data ?? [],
    pagination: query.data?.meta,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    handleDelete,
    isDeleting: deleteMutation.isPending,
  };
}
```

# ─────────────────────────────────────────────

# 4. TANSTACK QUERY — PATTERNS & RULES

# ─────────────────────────────────────────────

## 4.0 Queries and Mutations as Custom Hooks (MANDATORY)

- Every query and mutation MUST be defined as a custom hook in the feature’s `queries/` layer (e.g. `useUsersQuery`, `useUserQuery`, `useCreateUserMutation`).
- Components MUST use only these custom hooks. Never call `useQuery` or `useMutation` directly in components, pages, or other hooks with inline config.
- Query/mutation definitions live in `modules/[feature]/queries/[feature].queries.ts` and `[feature].mutations.ts`; components import and call the hooks from there (or via the module’s barrel).
- This keeps keys, options, and cache logic in one place and ensures consistent usage.

## 4.1 Query Key Factory (MANDATORY)

All query keys live in one place. Never inline string arrays.

```tsx
// config/query-keys.ts
export const queryKeys = {
  users: {
    all: () => ["users"] as const,
    lists: () => [...queryKeys.users.all(), "list"] as const,
    list: (filters: UserFilters) =>
      [...queryKeys.users.lists(), filters] as const,
    details: () => [...queryKeys.users.all(), "detail"] as const,
    detail: (id: string) => [...queryKeys.users.details(), id] as const,
  },
  posts: {
    all: () => ["posts"] as const,
    list: (filters: PostFilters) =>
      [...queryKeys.posts.all(), "list", filters] as const,
    detail: (id: string) => [...queryKeys.posts.all(), "detail", id] as const,
    byUser: (userId: string) =>
      [...queryKeys.posts.all(), "by-user", userId] as const,
  },
} as const;
```

## 4.2 Query Definitions

```tsx
// modules/users/queries/users.queries.ts
export function useUsersQuery(filters: UserFilters) {
  return useQuery({
    queryKey: queryKeys.users.list(filters),
    queryFn: () => usersApi.getUsers(filters),
    staleTime: 5 * 60 * 1000, // 5 min — tune per data type
    gcTime: 10 * 60 * 1000, // 10 min
    placeholderData: keepPreviousData, // Smooth pagination UX
    select: (data) => data, // Transform here, not in components
  });
}

export function useUserQuery(
  id: string,
  options?: Partial<UseQueryOptions<User>>
) {
  return useQuery({
    queryKey: queryKeys.users.detail(id),
    queryFn: () => usersApi.getUser(id),
    enabled: Boolean(id),
    staleTime: 10 * 60 * 1000,
    ...options,
  });
}

// Prefetch helper for Server Components / loaders
export function prefetchUser(queryClient: QueryClient, id: string) {
  return queryClient.prefetchQuery({
    queryKey: queryKeys.users.detail(id),
    queryFn: () => usersApi.getUser(id),
  });
}
```

## 4.3 Mutation Definitions

```tsx
// modules/users/queries/users.mutations.ts
export function useCreateUserMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: usersApi.createUser,
    onMutate: async (newUser) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.users.lists() });
      const snapshot = queryClient.getQueryData(queryKeys.users.lists());
      // Optimistic update
      queryClient.setQueryData(
        queryKeys.users.lists(),
        (old: UserListResponse) => ({
          ...old,
          data: [{ ...newUser, id: "temp-" + Date.now() }, ...old.data],
        })
      );
      return { snapshot };
    },
    onError: (_err, _vars, context) => {
      // Rollback on error
      queryClient.setQueryData(queryKeys.users.lists(), context?.snapshot);
      toast.error("Failed to create user");
    },
    onSuccess: (user) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.users.lists() });
      queryClient.setQueryData(queryKeys.users.detail(user.id), user);
      toast.success("User created");
    },
  });
}

export function useUpdateUserMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...data }: UpdateUserPayload) =>
      usersApi.updateUser(id, data),
    onSuccess: (updated) => {
      queryClient.setQueryData(queryKeys.users.detail(updated.id), updated);
      queryClient.invalidateQueries({ queryKey: queryKeys.users.lists() });
    },
    onError: () => toast.error("Update failed"),
  });
}

export function useDeleteUserMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: usersApi.deleteUser,
    onSuccess: (_, id) => {
      queryClient.removeQueries({ queryKey: queryKeys.users.detail(id) });
      queryClient.invalidateQueries({ queryKey: queryKeys.users.lists() });
      toast.success("User deleted");
    },
  });
}
```

## 4.4 Infinite Query Pattern

```tsx
export function useInfinitePostsQuery(filters: PostFilters) {
  return useInfiniteQuery({
    queryKey: queryKeys.posts.list(filters),
    queryFn: ({ pageParam }) =>
      postsApi.getPosts({ ...filters, cursor: pageParam }),
    initialPageParam: undefined as string | undefined,
    getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
    select: (data) => ({
      pages: data.pages,
      posts: data.pages.flatMap((p) => p.data),
    }),
  });
}
```

## 4.5 QueryClient Configuration

```tsx
// lib/query-client.ts
export function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        gcTime: 5 * 60 * 1000,
        retry: (failureCount, error) => {
          if (
            isHttpError(error, 401) ||
            isHttpError(error, 403) ||
            isHttpError(error, 404)
          )
            return false;
          return failureCount < 2;
        },
        refetchOnWindowFocus: process.env.NODE_ENV === "production",
      },
      mutations: {
        onError: (error) => {
          if (isHttpError(error, 401)) redirectToLogin();
        },
      },
    },
  });
}
```

## 4.6 Query Rules

- NEVER use `queryClient.invalidateQueries` with no arguments — too broad.
- NEVER call APIs directly in components — always via query/mutation hooks.
- NEVER use raw `useQuery` or `useMutation` in components — always use the feature’s custom hooks (e.g. `useUsersQuery`, `useCreateUserMutation`).
- Set `staleTime` deliberately per data type. Default is 1 minute. Not every query needs the same.
- Use `select` to transform data inside `useQuery` — keeps components clean.
- Use `enabled` to conditionally fire queries. Never call with empty/invalid params.
- Prefetch critical data in Server Components or route loaders for perceived performance.
- Use `suspense: true` + `<Suspense>` for loading states instead of manual `isLoading` branches.

# ─────────────────────────────────────────────

# 5. API LAYER

# ─────────────────────────────────────────────

```tsx
// lib/axios.ts
const api = axios.create({
  baseURL: env.NEXT_PUBLIC_API_URL,
  timeout: 30_000,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const token = tokenStore.getAccessToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  config.headers["X-Request-ID"] = crypto.randomUUID();
  return config;
});

api.interceptors.response.use(
  (response) => response.data,
  async (error: AxiosError<ApiErrorResponse>) => {
    if (error.response?.status === 401) {
      const refreshed = await tokenStore.refresh();
      if (!refreshed) {
        tokenStore.clear();
        redirectToLogin();
      }
      return api.request(error.config!);
    }
    return Promise.reject(normalizeApiError(error));
  }
);
```

```tsx
// modules/users/api/users.api.ts
export const usersApi = {
  getUsers: (filters: UserFilters): Promise<PaginatedResponse<User>> =>
    api.get("/users", { params: filters }),

  getUser: (id: string): Promise<User> => api.get(`/users/${id}`),

  createUser: (data: CreateUserDto): Promise<User> => api.post("/users", data),

  updateUser: (id: string, data: UpdateUserDto): Promise<User> =>
    api.patch(`/users/${id}`, data),

  deleteUser: (id: string): Promise<void> => api.delete(`/users/${id}`),
} as const;
```

Rules:

- API functions are pure async functions — no hooks, no state.
- API functions return typed responses — NEVER `any`.
- API files are named `[feature].api.ts` and live inside the module.
- A single Axios instance in `lib/axios.ts` — never create another.

# ─────────────────────────────────────────────

# 6. FORM MANAGEMENT

# ─────────────────────────────────────────────

Use `react-hook-form` + `zod` + `@hookform/resolvers/zod`.

```tsx
// modules/users/schemas/create-user.schema.ts
export const createUserSchema = z.object({
  email: z.string().email("Invalid email address"),
  name: z.string().min(2, "Name must be at least 2 characters").max(50),
  role: z.nativeEnum(UserRole),
});
export type CreateUserFormValues = z.infer<typeof createUserSchema>;

// modules/users/components/create-user-form.tsx
export function CreateUserForm({ onSuccess }: { onSuccess: () => void }) {
  const { mutate, isPending } = useCreateUserMutation();
  const form = useForm<CreateUserFormValues>({
    resolver: zodResolver(createUserSchema),
    defaultValues: { email: "", name: "", role: UserRole.USER },
  });

  const onSubmit = form.handleSubmit((data) => {
    mutate(data, { onSuccess });
  });

  return (
    <Form form={form} onSubmit={onSubmit}>
      <FormField name="email" label="Email" type="email" />
      <FormField name="name" label="Full Name" />
      <FormField name="role" label="Role" as="select" options={roleOptions} />
      <Button type="submit" loading={isPending}>
        Create User
      </Button>
    </Form>
  );
}
```

## Reusable FormField Component

```tsx
// components/ui/form-field.tsx
interface FormFieldProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  description?: string;
  as?: "input" | "textarea" | "select";
}

export function FormField<T extends FieldValues>({
  name,
  label,
  description,
  as = "input",
  ...props
}: FormFieldProps<T>) {
  const {
    register,
    formState: { errors },
  } = useFormContext<T>();
  const error = errors[name];

  return (
    <div className="space-y-1.5">
      <Label htmlFor={name}>{label}</Label>
      {as === "input" && (
        <Input
          id={name}
          {...register(name)}
          aria-invalid={!!error}
          {...props}
        />
      )}
      {error && (
        <p className="text-destructive text-sm" role="alert">
          {error.message as string}
        </p>
      )}
      {description && !error && (
        <p className="text-muted-foreground text-sm">{description}</p>
      )}
    </div>
  );
}
```

# ─────────────────────────────────────────────

# 7. TAILWIND CSS — RULES & PATTERNS

# ─────────────────────────────────────────────

## 7.1 Class Management

```tsx
// lib/cn.ts — ALWAYS use this for conditional classes
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

## 7.2 cva (class-variance-authority) for Variants

```tsx
// components/ui/button.tsx
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-8 px-3",
        md: "h-9 px-4",
        lg: "h-10 px-6",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: { variant: "default", size: "md" },
  }
);

interface ButtonProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, asChild, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading && <Loader2 className="h-4 w-4 animate-spin" />}
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";
```

## 7.3 CSS Custom Properties for Theming

```css
/* styles/globals.css */
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --radius: 0.5rem;
    /* ... */
  }
  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    /* ... */
  }
}
```

## 7.4 Tailwind Rules

- NEVER use arbitrary values for colors (`text-[#abc]`) — use design tokens.
- NEVER inline complex responsive classes in JSX — extract with `cn()` or `cva()`.
- Use `@layer components` for complex repeated patterns that can't be componentized.
- Keep Tailwind configs in `tailwind.config.ts` — fonts, colors, spacing extensions.
- Never use `style={{ }}` for values that can be expressed as Tailwind classes.
- Sort classes with `prettier-plugin-tailwindcss`.

# ─────────────────────────────────────────────

# 8. STATE MANAGEMENT

# ─────────────────────────────────────────────

## Decision Tree

| State Type          | Solution                     |
| ------------------- | ---------------------------- |
| Server data         | TanStack Query               |
| Form state          | React Hook Form              |
| Local UI state      | `useState` / `useReducer`    |
| Shared UI state     | React Context (narrow scope) |
| Global client state | Zustand                      |
| URL state           | `useSearchParams` + `nuqs`   |

## Rules

- Do NOT put server data in Zustand. TanStack Query IS the server state manager.
- Context: one concern per context. Never a "God context" with many unrelated values.
- Memoize context values: `useMemo` on value object to avoid unnecessary re-renders.
- URL is state. Filters, pagination, tabs → use `nuqs` for typed URL search params.
- Lift state only as far as necessary. Co-locate state with its consumers.

## Zustand Pattern (Global UI State Only)

```tsx
// modules/ui/stores/sidebar.store.ts
interface SidebarStore {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

export const useSidebarStore = create<SidebarStore>((set) => ({
  isOpen: true,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toggle: () => set((s) => ({ isOpen: !s.isOpen })),
}));

// Selector pattern — prevent unnecessary re-renders
export const useSidebarIsOpen = () => useSidebarStore((s) => s.isOpen);
export const useSidebarActions = () =>
  useSidebarStore((s) => ({ open: s.open, close: s.close, toggle: s.toggle }));
```

# ─────────────────────────────────────────────

# 9. NEXT.JS — APP ROUTER RULES

# ─────────────────────────────────────────────

## 9.1 Server vs Client Components

| Use Server Component (`async` default)     | Use Client Component (`'use client'`) |
| ------------------------------------------ | ------------------------------------- |
| Data fetching (no user interaction needed) | Event listeners (onClick, onChange)   |
| Access to backend resources                | useState / useEffect                  |
| Keeping secrets on server                  | Browser-only APIs                     |
| Reduce client JS bundle                    | Custom hooks that use the above       |

Rules:

- Default to Server Components. Only add `'use client'` when necessary.
- Push `'use client'` as far DOWN the tree as possible (leaf components).
- Never fetch data in Client Components if a Server Component can do it.
- Server Components can render Client Components — but not vice versa.
- Use `children` prop pattern to pass Server Component content into Client Component wrappers.

## 9.2 Data Fetching Patterns

```tsx
// app/(dashboard)/users/page.tsx — Server Component
export default async function UsersPage({ searchParams }: PageProps) {
  const filters = parseUserFilters(searchParams);

  // Prefetch for TanStack Query hydration
  const queryClient = makeQueryClient();
  await prefetchUsersQuery(queryClient, filters);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <UserListContainer filters={filters} />
    </HydrationBoundary>
  );
}
```

## 9.3 Loading & Error Boundaries

Every route segment should have:

- `loading.tsx` — automatic Suspense boundary with skeleton UI
- `error.tsx` — `'use client'` error boundary with reset capability
- `not-found.tsx` — 404 state

## 9.4 Route Organization

- `(groupname)/` — route groups for layout sharing (no URL segment)
- `[param]/` — dynamic routes
- `(..)/` — parallel and intercepting routes for modals
- `_components/` — co-located private components (not routed)

## 9.5 Metadata

```tsx
// Every page.tsx should export metadata
export const metadata: Metadata = {
  title: 'Page Title | App Name',
  description: '...',
  openGraph: { ... },
};

// Or dynamic:
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const user = await getUser(params.id);
  return { title: `${user.name} | App Name` };
}
```

## 9.6 Middleware

```tsx
// middleware.ts
export function middleware(request: NextRequest) {
  const token = request.cookies.get("access-token")?.value;
  const isAuthRoute = request.nextUrl.pathname.startsWith("/login");
  const isPublicRoute = publicRoutes.includes(request.nextUrl.pathname);

  if (!token && !isPublicRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (token && isAuthRoute) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
```

# ─────────────────────────────────────────────

# 10. TYPESCRIPT RULES — STRICT

# ─────────────────────────────────────────────

- `strict: true` in `tsconfig.json`. All strict flags enabled. No exceptions.
- `noUncheckedIndexedAccess: true` — array access returns `T | undefined`.
- `exactOptionalPropertyTypes: true` — `undefined` must be explicit.
- NEVER use `any`. Use `unknown` and narrow it.
- NEVER use `as` type assertions unless you can prove correctness — comment why.
- NEVER use non-null assertion (`!`) without a comment explaining why it's safe.
- Prefer `type` over `interface` for unions/intersections. Use `interface` for extendable shapes.
- Use `satisfies` operator to validate objects against types without widening.
- Use `const` assertions on literal objects.
- Use branded types for IDs to prevent mixing:

```tsx
type UserId  = string & { __brand: 'UserId' };
type PostId  = string & { __brand: 'PostId' };

function toUserId(id: string): UserId { return id as UserId; }

// This now errors at compile time:
function getPost(id: PostId) { ... }
getPost(userId); // ❌ Type error — caught at compile time!
```

## Utility Types in Use

```tsx
// Common utility types — live in types/common.types.ts
export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type Maybe<T> = T | null | undefined;
export type AsyncFn<T> = () => Promise<T>;
export type ValueOf<T> = T[keyof T];
export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};
export type WithId<T> = T & { id: string };
export type PaginatedResponse<T> = { data: T[]; meta: PaginationMeta };
```

# ─────────────────────────────────────────────

# 11. PERFORMANCE

# ─────────────────────────────────────────────

## 11.1 Memoization Rules

- `useMemo` for expensive computations or stable object references passed to context/child props.
- `useCallback` for functions passed as props to memoized children.
- `React.memo` for components that receive stable props but re-render due to parent.
- Do NOT memoize everything — premature optimization. Profile first.

```tsx
// ✅ Correct — stable reference for context value
const contextValue = useMemo(() => ({ user, logout }), [user, logout]);

// ✅ Correct — preventing re-render of expensive list
const UserList = memo(function UserList({ users, onSelect }: UserListProps) { ... });

// ❌ Wrong — useMemo on simple primitive
const fullName = useMemo(() => `${first} ${last}`, [first, last]); // Just compute inline
```

## 11.2 Code Splitting

- Dynamic import all heavy components:

```tsx
const RichTextEditor = dynamic(
  () => import("@/components/ui/rich-text-editor"),
  {
    loading: () => <Skeleton className="h-40 w-full" />,
    ssr: false,
  }
);

const HeavyChart = dynamic(
  () => import("@/modules/analytics/components/heavy-chart"),
  {
    ssr: false,
  }
);
```

## 11.3 Image Optimization

- ALWAYS use `next/image`. NEVER `<img>` for app images.
- Provide `width` and `height` or use `fill` with a sized container.
- Use `priority` on above-the-fold LCP images.
- Use `sizes` prop for responsive images.

## 11.4 Rules

- Avoid layout thrash — don't read and write DOM in the same frame.
- Virtualize long lists (> 100 items) with `react-virtual` or `@tanstack/react-virtual`.
- Debounce all search inputs (300ms).
- Use `keepPreviousData` in paginated queries to avoid layout shift.
- Route prefetching: use `router.prefetch()` on hover for key navigation routes.

# ─────────────────────────────────────────────

# 12. ACCESSIBILITY (a11y)

# ─────────────────────────────────────────────

- Every interactive element must be reachable by keyboard.
- Use semantic HTML first. `<button>` not `<div onClick>`.
- All images need `alt` text. Decorative images: `alt=""`.
- Color contrast must meet WCAG AA (4.5:1 for text, 3:1 for UI elements).
- Use `aria-label` when visible label is absent.
- Use `role`, `aria-expanded`, `aria-controls`, `aria-haspopup` on custom widgets.
- Announce dynamic content changes with `aria-live="polite"`.
- All form inputs must have associated `<label>` elements (via `htmlFor` or wrapping).
- Modals must trap focus and restore focus on close.
- Loading states must be communicated: `aria-busy="true"` or visually hidden status text.

```tsx
// Accessible loading button
<button
  aria-disabled={isPending}
  aria-label={isPending ? "Saving..." : "Save changes"}
>
  {isPending && (
    <span aria-hidden="true">
      <Loader2 />
    </span>
  )}
  <span>{isPending ? "Saving..." : "Save changes"}</span>
</button>
```

# ─────────────────────────────────────────────

# 13. ERROR HANDLING

# ─────────────────────────────────────────────

## 13.1 Error Boundary (Class Component — React requirement)

```tsx
// components/feedback/error-boundary.tsx
interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<
  PropsWithChildren<{ fallback?: ReactNode; onError?: (error: Error) => void }>,
  ErrorBoundaryState
> {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    this.props.onError?.(error);
    logger.error(error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <DefaultErrorFallback
            error={this.state.error}
            onReset={() => this.setState({ hasError: false, error: null })}
          />
        )
      );
    }
    return this.props.children;
  }
}
```

## 13.2 API Error Normalization

```tsx
// types/api.types.ts
export interface ApiError {
  statusCode: number;
  message: string;
  error: string;
  requestId?: string;
}

// lib/axios.ts
function normalizeApiError(error: AxiosError<ApiError>): ApiError {
  return {
    statusCode: error.response?.status ?? 0,
    message: error.response?.data?.message ?? "An unexpected error occurred",
    error: error.response?.data?.error ?? "Unknown Error",
    requestId: error.response?.data?.requestId,
  };
}
```

## 13.3 Rules

- Every async operation must handle errors — no unhandled promises.
- Display user-friendly error messages — never expose raw API errors.
- Log errors to your monitoring service (Sentry, etc.) in `ErrorBoundary.componentDidCatch`.
- Use `error.tsx` for route-level errors; `<ErrorBoundary>` for component-level errors.
- Mutation errors should show toast notifications.
- Query errors should render inline error states.

# ─────────────────────────────────────────────

# 14. ENVIRONMENT & CONFIGURATION

# ─────────────────────────────────────────────

```tsx
// config/env.ts — Zod-validated env vars
import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().url(),
  NEXT_PUBLIC_APP_URL: z.string().url(),
  NEXT_PUBLIC_ENV: z.enum(["development", "staging", "production"]),
});

function parseEnv() {
  const result = envSchema.safeParse(process.env);
  if (!result.success) {
    throw new Error(
      `Invalid environment variables:\n${result.error.toString()}`
    );
  }
  return result.data;
}

export const env = parseEnv();
```

Rules:

- NEVER access `process.env.X` directly in components — import from `config/env.ts`.
- `NEXT_PUBLIC_` prefix only for values safe to expose to the browser.
- All env vars documented in `.env.example` with comments.
- App fails to build/start if required env vars are missing.

# ─────────────────────────────────────────────

# 15. TESTING

# ─────────────────────────────────────────────

## Strategy

| Type        | Tool                           | Target                   |
| ----------- | ------------------------------ | ------------------------ |
| Unit        | Vitest + React Testing Library | Hooks, utils, components |
| Integration | Vitest + MSW (API mocking)     | Feature flows            |
| E2E         | Playwright                     | Critical user journeys   |

## Testing Rules

- Test behavior, not implementation. Never test internal state.
- Use `screen.getByRole()` over `getByTestId()` — tests accessibility too.
- Mock API calls with MSW handlers — never mock `axios` directly.
- Use factories/builders for test data — never hardcode objects inline.
- Every custom hook has its own test using `renderHook`.
- Snapshot tests are forbidden — they create noise without meaningful coverage.

```tsx
// MSW Handler
(http.get("/api/users", () =>
  HttpResponse.json<PaginatedResponse<User>>({
    data: [userFactory(), userFactory()],
    meta: { total: 2, page: 1, limit: 20, totalPages: 1 },
  })
),
  // Component Test
  it("should render user list and handle delete", async () => {
    render(<UserListContainer />);
    expect(
      await screen.findByRole("row", { name: /john doe/i })
    ).toBeInTheDocument();
    await userEvent.click(
      screen.getByRole("button", { name: /delete john doe/i })
    );
    await waitFor(() =>
      expect(
        screen.queryByRole("row", { name: /john doe/i })
      ).not.toBeInTheDocument()
    );
  }));
```

# ─────────────────────────────────────────────

# 16. CODE STYLE & NAMING

# ─────────────────────────────────────────────

| Element           | Convention             | Example                          |
| ----------------- | ---------------------- | -------------------------------- |
| Files             | kebab-case             | `user-profile-card.tsx`          |
| Components        | PascalCase             | `UserProfileCard`                |
| Hooks             | camelCase + `use`      | `useUserProfile`                 |
| Queries/Mutations | camelCase + descriptor | `useUsersQuery`, `useCreateUser` |
| Stores            | camelCase + `use`      | `useSidebarStore`                |
| Constants         | UPPER_SNAKE_CASE       | `MAX_FILE_SIZE`                  |
| Types             | PascalCase             | `UserProfileCardProps`           |
| Enums             | PascalCase             | `UserRole.ADMIN`                 |
| Event handlers    | `handle` prefix        | `handleSubmit`, `handleDelete`   |
| Boolean props     | `is`/`has`/`can`       | `isLoading`, `hasError`          |
| CSS classes       | Tailwind only          | No custom class names in JSX     |

## ESLint Rules

- `react-hooks/rules-of-hooks`: error
- `react-hooks/exhaustive-deps`: error
- `@typescript-eslint/no-explicit-any`: error
- `@typescript-eslint/no-non-null-assertion`: warn (comment required)
- `no-console`: error (use a logger utility)
- `import/no-cycle`: error — no circular imports

# ─────────────────────────────────────────────

# 17. WHAT IS STRICTLY FORBIDDEN

# ─────────────────────────────────────────────

❌ `any` TypeScript type — use `unknown` and narrow.
❌ `as` casts without a comment proving safety.
❌ Direct API calls in components — always use query/mutation hooks.
❌ Raw `useQuery`/`useMutation` in components or pages — use only custom hooks from `modules/[feature]/queries/`.
❌ Business logic in page components — pages render, modules handle logic.
❌ Cross-module imports — modules import from `common/` or their own internals only.
❌ `console.log` — use a structured logger.
❌ Inline `style={{}}` for things Tailwind can do.
❌ `<img>` tags — always use `next/image`.
❌ Hardcoded strings — use constants, enums, or i18n keys.
❌ Hardcoded magic numbers — extract to named constants.
❌ State in TanStack Query AND Zustand for the same data.
❌ `useEffect` for data fetching — use TanStack Query.
❌ Global CSS class names — use Tailwind or CSS modules.
❌ Snapshot tests.
❌ Committing `.env` files or API keys.
❌ Skipping `displayName` on HOC-wrapped components.
❌ `getByTestId` in tests when accessible queries exist.
❌ Inline query keys (strings/arrays) — always use `queryKeys` factory.

# ─────────────────────────────────────────────

# 18. QUICK CHECKLIST — BEFORE EVERY PR

# ─────────────────────────────────────────────

- [ ] No `any` types introduced.
- [ ] All new components have TypeScript props interfaces.
- [ ] Client Components have `'use client'` — Server Components do not.
- [ ] All forms use `react-hook-form` + `zod`.
- [ ] All API calls go through query/mutation hooks — not direct in components.
- [ ] All queries and mutations are used only via custom hooks (e.g. `useXxxQuery`, `useXxxMutation`) — no raw `useQuery`/`useMutation` in components.
- [ ] Query keys use the `queryKeys` factory.
- [ ] New query keys invalidated correctly in related mutations.
- [ ] Images use `next/image`.
- [ ] Interactive elements are keyboard accessible.
- [ ] No cross-module direct imports.
- [ ] Loading, error, and empty states handled in all data-fetching components.
- [ ] Heavy components use `dynamic()` import.
- [ ] Env vars accessed via `config/env.ts` only.
- [ ] Lint passes: `npm run lint`.
- [ ] Type check passes: `npm run type-check`.
- [ ] Tests pass: `npm run test`.
- [ ] Build passes: `npm run build`.
