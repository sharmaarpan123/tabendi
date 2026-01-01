export interface ContactUsData {
    name: string;
    email: string;
    phone_number: string;
    message: string;
  }
  
  export interface ContactUsResponse {
    message?: string;
  }

  // Home Page Data Types
  export interface Testimonial {
    id: number;
    name: string;
    profile_image: string;
    content: string;
    rating: number;
    created_at: string;
    updated_at: string;
  }

  export interface Category {
    id: number;
    parent_id: number | null;
    title: string;
    slug: string | null;
    icon: string;
    description: string;
    status: number;
    deleted_at: string | null;
    created_at: string | null;
    updated_at: string;
  }

  export interface HomePageData {
    data: {
      testimonials: Testimonial[];
      categories: Category[];
    };
  }