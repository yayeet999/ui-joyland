
import React from 'react';
import FacebookButtonPreview from '../previews/buttons/FacebookButtonPreview';
import XButtonPreview from '../previews/buttons/XButtonPreview';
import GithubButtonPreview from '../previews/buttons/GithubButtonPreview';
import GoogleButtonPreview from '../previews/buttons/GoogleButtonPreview';
import AppleButtonPreview from '../previews/buttons/AppleButtonPreview';
import SubmitButtonPreview from '../previews/buttons/SubmitButtonPreview';
import DownloadButtonPreview from '../previews/buttons/DownloadButtonPreview';
import DownloadProgressButtonPreview from '../previews/buttons/DownloadProgressButtonPreview';

interface ButtonPreviewProps {
  name: string;
}

const ButtonPreview: React.FC<ButtonPreviewProps> = ({ name }) => {
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
    case "Submit Button":
      return <SubmitButtonPreview />;
    case "Download Button":
      return <DownloadButtonPreview />;
    case "Download Progress Button":
      return <DownloadProgressButtonPreview />;
    default:
      return (
        <div className="text-center text-gray-500 dark:text-gray-400">
          <p className="text-sm">[Interactive {name} Preview]</p>
        </div>
      );
  }
};

export default ButtonPreview;
