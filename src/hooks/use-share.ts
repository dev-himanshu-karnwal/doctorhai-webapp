import { toast } from "sonner";

export function useShare() {
  const shareContent = async (title: string, text: string, url: string) => {
    const shareData = { title, text, url };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(url);
        toast.success("Link copied to clipboard!");
      }
    } catch (error) {
      if ((error as Error).name !== "AbortError") {
        console.error("Error sharing:", error);
      }
    }
  };

  return { shareContent };
}
