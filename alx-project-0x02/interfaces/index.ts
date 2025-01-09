export interface CardProps {
  title: string;
  content: string;
}

export interface ButtonProps {
      size: "small" | "medium" | "large";
      shape: "rounded-sm" | "rounded-md" | "rounded-full";
      onClick?: () => void;
      children: React.ReactNode;
    }
    
    // interfaces/index.ts
export interface PostProps {
      userId: number;
      title: string;
      content: string;
    }
    
    // interfaces/index.ts
export interface UserProps {
      name: string;
      email: string;
      address: {
        street: string;
        city: string;
        zipcode: string;
      };
    }
    