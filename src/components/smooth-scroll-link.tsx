"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SmoothScrollLinkProps {
  targetId: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}

export function SmoothScrollLink({
  targetId,
  children,
  className,
  variant = "default",
  size = "lg",
}: SmoothScrollLinkProps) {
  const handleClick = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button
      onClick={handleClick}
      variant={variant}
      size={size}
      className={cn("cursor-pointer", className)}
    >
      {children}
    </Button>
  );
}
