import React from 'react';
import FacebookButtonPreview from '../previews/buttons/FacebookButtonPreview';
import XButtonPreview from '../previews/buttons/XButtonPreview';
import GithubButtonPreview from '../previews/buttons/GithubButtonPreview';
import GoogleButtonPreview from '../previews/buttons/GoogleButtonPreview';
import AppleButtonPreview from '../previews/buttons/AppleButtonPreview';
import DownloadButtonPreview from '../previews/buttons/DownloadButtonPreview';
import DownloadProgressButtonPreview from '../previews/buttons/DownloadProgressButtonPreview';
import XAuth2ButtonPreview from '../previews/buttons/XAuth2ButtonPreview';
import AnimatedSubmitButtonPreview from '../previews/buttons/AnimatedSubmitButtonPreview';
import AddToCartButtonPreview from '../previews/buttons/AddToCartButtonPreview';

interface ButtonPreviewProps {
  name: string;
}

const ButtonPreview: React.FC<ButtonPreviewProps> = ({ name }) => {
  const renderButtonPreview = (name: string) => {
    switch (name) {
      case "Facebook Auth Button":
        return <FacebookButtonPreview />;
      case "X Auth Button":
        return <XButtonPreview />;
      case "Github Auth Button":
        return <GithubButtonPreview />;
      case "Google Auth Button":
        return <GoogleButtonPreview />;
      case "Apple Auth Button":
        return <AppleButtonPreview />;
      case "Download Button":
        return <DownloadButtonPreview />;
      case "Download Progress Button":
        return <DownloadProgressButtonPreview />;
      case "X Auth2 Button":
        return <XAuth2ButtonPreview />;
      case "Animated Submit Button":
        return <AnimatedSubmitButtonPreview />;
      case "Add-to-Cart Button":
        return <AddToCartButtonPreview />;
      default:
        return (
          <div className="text-center text-gray-500 dark:text-gray-400">
            <p className="text-sm">[Interactive {name} Preview]</p>
          </div>
        );
    }
  };

  return renderButtonPreview(name);
};

export default ButtonPreview;
