
import React from 'react';
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from '@/components/ui/button';
import { motion } from "framer-motion";

interface ButtonCardProps {
  component: any;
  delay: number;
  category: string;
}

const ButtonCard: React.FC<ButtonCardProps> = ({ component, delay, category }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: delay * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
    >
      {/* Component Preview */}
      <div className="relative">
        <div className="absolute top-2 right-2 z-10">
          <Button
            size="sm"
            variant="secondary"
            className="flex items-center gap-1 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-gray-700 hover:border-blue-300 dark:hover:border-blue-700 font-medium py-2 px-3 shadow-sm hover:shadow rounded-md transition-all duration-200"
            asChild
          >
            <Link to={`/components/${category}/${component.id}`}>
              <span className="text-sm">Code</span>
              <ArrowRight className="w-4 h-4 ml-1 opacity-70" />
            </Link>
          </Button>
        </div>
        <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-[200px] flex items-center justify-center">
          {component.name === "Facebook Auth Button" ? (
            <button className="facebook-auth-btn-card">
              <div className="facebook-icon-wrapper-card">
                <svg className="facebook-icon-card" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="#ffffff" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <span className="button-text-card">Sign in with Facebook</span>
            </button>
          ) : component.name === "X Auth Button" ? (
            <button className="x-auth-btn-card">
              <div className="x-icon-wrapper-card">
                <svg className="x-icon-card" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="#ffffff" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <span className="button-text-card">Sign in with X</span>
            </button>
          ) : component.name === "Github Auth Button" ? (
            <button className="github-auth-btn-card">
              <div className="github-icon-wrapper-card">
                <svg className="github-icon-card" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="#ffffff" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <span className="button-text-card">Sign in with GitHub</span>
            </button>
          ) : component.name === "Google Auth Button" ? (
            <button className="google-auth-btn-card">
              <div className="google-icon-wrapper-card">
                <svg className="google-icon-card" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                </svg>
              </div>
              <span className="button-text-card">Sign in with Google</span>
            </button>
          ) : component.name === "Apple Auth Button" ? (
            <button className="apple-auth-btn-card">
              <div className="apple-icon-wrapper-card">
                <svg className="apple-icon-card" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path fill="#ffffff" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
              </div>
              <span className="button-text-card">Sign in with Apple</span>
            </button>
          ) : component.name === "Submit Button" ? (
            <button className="px-6 py-2 font-medium bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300 shadow-md">
              Submit
            </button>
          ) : component.name === "Download Button" ? (
            <button className="px-6 py-2 font-medium bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 shadow-md flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download
            </button>
          ) : component.name === "Neon Button" ? (
            <button className="relative px-6 py-2 font-medium text-white bg-purple-600 rounded-lg shadow-[0_0_10px_rgba(139,92,246,0.8),0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_15px_rgba(139,92,246,1),0_0_30px_rgba(139,92,246,0.8)] transition-shadow duration-300">
              Neon Effect
            </button>
          ) : component.name === "3D Button" ? (
            <button className="px-6 py-2 font-medium text-white bg-indigo-600 rounded-lg shadow-[0_6px_0_rgb(67,56,202)] hover:shadow-[0_3px_0_rgb(67,56,202)] transition-all duration-200 ease-in-out active:translate-y-3 active:shadow-none">
              3D Effect
            </button>
          ) : (
            <div className="text-center text-gray-500 dark:text-gray-400">
              <p className="text-sm">[Interactive {component.name} Preview]</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Component Information */}
      <div className="p-4">
        <h3 className="font-medium text-base">{component.name}</h3>
      </div>
    </motion.div>
  );
};

export default ButtonCard;
