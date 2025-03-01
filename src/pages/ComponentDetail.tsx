import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "@/components/Layout";
import { toast } from "sonner";

// Mock data for component code (to be replaced with API calls)
const getComponentCode = (id: string) => {
  // This would be replaced with actual data fetching in a real app
  const codeMap: Record<string, { html: string; css: string; full: string; name: string; }> = {
    "1": {
      name: "Facebook Auth Button",
      html: `<button class="facebook-auth-btn">
  <div class="facebook-icon-wrapper">
    <svg class="facebook-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path fill="#ffffff" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  </div>
  <span class="button-text">Sign in with Facebook</span>
</button>`,
      css: `.facebook-auth-btn {
  width: 240px;
  height: 42px;
  background-color: #1877F2;
  border-radius: 4px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  border: none;
  position: relative;
}

.facebook-auth-btn:active {
  background-color: #0b5fcc;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);
  transform: translateY(1px);
}

.facebook-auth-btn:hover {
  background-color: #166fe5;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);
}

.facebook-icon-wrapper {
  position: absolute;
  left: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.facebook-icon {
  width: 20px;
  height: 20px;
}

.button-text {
  margin: 0 36px 0 0;
  color: white;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 0.2px;
}`,
      full: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Facebook Auth Button</title>
  <style>
    .facebook-auth-btn {
      width: 240px;
      height: 42px;
      background-color: #1877F2;
      border-radius: 4px;
      box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
      border: none;
      position: relative;
    }
    
    .facebook-auth-btn:active {
      background-color: #0b5fcc;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);
      transform: translateY(1px);
    }
    
    .facebook-auth-btn:hover {
      background-color: #166fe5;
      box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);
    }
    
    .facebook-icon-wrapper {
      position: absolute;
      left: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .facebook-icon {
      width: 20px;
      height: 20px;
    }
    
    .button-text {
      margin: 0 36px 0 0;
      color: white;
      font-size: 14px;
      font-weight: 500;
      font-family: 'Roboto', sans-serif;
      letter-spacing: 0.2px;
    }
  </style>
</head>
<body>
  <button class="facebook-auth-btn">
    <div class="facebook-icon-wrapper">
      <svg class="facebook-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="#ffffff" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    </div>
    <span class="button-text">Sign in with Facebook</span>
  </button>
</body>
</html>`
    },
    "2": {
      name: "X Auth Button",
      html: `<button class="x-auth-btn">
  <div class="x-icon-wrapper">
    <svg class="x-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path fill="#ffffff" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  </div>
  <span class="button-text">Sign in with X</span>
</button>`,
      css: `.x-auth-btn {
  width: 240px;
  height: 42px;
  background-color: #000000;
  border-radius: 4px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  border: none;
  position: relative;
}

.x-auth-btn:active {
  background-color: #333333;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);
  transform: translateY(1px);
}

.x-auth-btn:hover {
  background-color: #222222;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);
}

.x-icon-wrapper {
  position: absolute;
  left: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.x-icon {
  width: 18px;
  height: 18px;
}

.button-text {
  margin: 0 36px 0 0;
  color: white;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 0.2px;
}`,
      full: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>X Auth Button</title>
  <style>
    .x-auth-btn {
      width: 240px;
      height: 42px;
      background-color: #000000;
      border-radius: 4px;
      box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
      border: none;
      position: relative;
    }

    .x-auth-btn:active {
      background-color: #333333;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);
      transform: translateY(1px);
    }

    .x-auth-btn:hover {
      background-color: #222222;
      box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);
    }

    .x-icon-wrapper {
      position: absolute;
      left: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .x-icon {
      width: 18px;
      height: 18px;
    }

    .button-text {
      margin: 0 36px 0 0;
      color: white;
      font-size: 14px;
      font-weight: 500;
      font-family: 'Roboto', sans-serif;
      letter-spacing: 0.2px;
    }
  </style>
</head>
<body>
  <button class="x-auth-btn">
    <div class="x-icon-wrapper">
      <svg class="x-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="#ffffff" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    </div>
    <span class="button-text">Sign in with X</span>
  </button>
</body>
</html>`
    },
    "3": {
      name: "Github Auth Button",
      html: `<button class="github-auth-btn">
  <div class="github-icon-wrapper">
    <svg class="github-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path fill="#ffffff" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  </div>
  <span class="button-text">Sign in with GitHub</span>
</button>`,
      css: `.github-auth-btn {
  width: 240px;
  height: 42px;
  background-color: #24292e;
  border-radius: 6px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  border: none;
  position: relative;
}

.github-auth-btn:active {
  background-color: #1a1e22;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);
  transform: translateY(1px);
}

.github-auth-btn:hover {
  background-color: #2b3137;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);
}

.github-icon-wrapper {
  position: absolute;
  left: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.github-icon {
  width: 20px;
  height: 20px;
}

.button-text {
  margin: 0 36px 0 0;
  color: white;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 0.2px;
}`,
      full: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Github Auth Button</title>
  <style>
    .github-auth-btn {
      width: 240px;
      height: 42px;
      background-color: #24292e;
      border-radius: 6px;
      box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
      border: none;
      position: relative;
    }

    .github-auth-btn:active {
      background-color: #1a1e22;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);
      transform: translateY(1px);
    }

    .github-auth-btn:hover {
      background-color: #2b3137;
      box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);
    }

    .github-icon-wrapper {
      position: absolute;
      left: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .github-icon {
      width: 20px;
      height: 20px;
    }

    .button-text {
      margin: 0 36px 0 0;
      color: white;
      font-size: 14px;
      font-weight: 500;
      font-family: 'Roboto', sans-serif;
      letter-spacing: 0.2px;
    }
  </style>
</head>
<body>
  <button class="github-auth-btn">
    <div class="github-icon-wrapper">
      <svg class="github-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="#ffffff" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    </div>
    <span class="button-text">Sign in with GitHub</span>
  </button>
</body>
</html>`
    },
    "4": {
      name: "Google Auth Button",
      html: `<button class="google-auth-btn">
  <div class="google-icon-wrapper">
    <svg class="google-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    </svg>
  </div>
  <span class="button-text">Sign in with Google</span>
</button>`,
      css: `.google-auth-btn {
  width: 240px;
  height: 42px;
  background-color: #4285f4;
  border-radius: 2px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  border: none;
  position: relative;
}

.google-auth-btn:active {
  background-color: #3367d6;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);
  transform: translateY(1px);
}

.google-auth-btn:hover {
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);
}

.google-icon-wrapper {
  position: absolute;
  left: 1px;
  top: 1px;
  width: 40px;
  height: 40px;
  border-radius: 2px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.google-icon {
  width: 18px;
  height: 18px;
}

.button-text {
  margin-left: 30px;
  color: white;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 0.2px;
}`,
      full: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Google Auth Button</title>
  <style>
    .google-auth-btn {
      width: 240px;
      height: 42px;
      background-color: #4285f4;
      border-radius: 2px;
      box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
      border: none;
      position: relative;
    }

    .google-auth-btn:active {
      background-color: #3367d6;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);
      transform: translateY(1px);
    }

    .google-auth-btn:hover {
      box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);
    }

    .google-icon-wrapper {
      position: absolute;
      left: 1px;
      top: 1px;
      width: 40px;
      height: 40px;
      border-radius: 2px;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .google-icon {
      width: 18px;
      height: 18px;
    }

    .button-text {
      margin-left: 30px;
      color: white;
      font-size: 14px;
      font-weight: 500;
      font-family: 'Roboto', sans-serif;
      letter-spacing: 0.2px;
    }
  </style>
</head>
<body>
  <button class="google-auth-btn">
    <div class="google-icon-wrapper">
      <svg class="google-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48
