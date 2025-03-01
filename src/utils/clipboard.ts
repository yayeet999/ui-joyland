
import { toast } from "sonner";

export const copyToClipboard = (code: string, language: string): void => {
  try {
    // Use the clipboard API with fallback
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(code)
        .then(() => {
          toast.success(`${language} code copied to clipboard!`);
        })
        .catch((error) => {
          console.error('Failed to copy: ', error);
          fallbackCopyTextToClipboard(code, language);
        });
    } else {
      fallbackCopyTextToClipboard(code, language);
    }
  } catch (error) {
    console.error('Copy failed:', error);
    toast.error('Failed to copy code. Please try again.');
  }
};

// Fallback method for older browsers
export const fallbackCopyTextToClipboard = (text: string, language: string): void => {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  
  // Make the textarea out of viewport
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  document.body.appendChild(textArea);
  
  textArea.focus();
  textArea.select();

  try {
    const successful = document.execCommand('copy');
    if (successful) {
      toast.success(`${language} code copied to clipboard!`);
    } else {
      toast.error('Failed to copy code. Please try again.');
    }
  } catch (err) {
    toast.error('Failed to copy code. Please try again.');
  }

  document.body.removeChild(textArea);
};
