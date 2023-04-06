import type { IGatsbyImageData, ImageDataLike } from 'gatsby-plugin-image';

export type ProjectSummaryTypes = {
  node: {
    clientName: string;
    metaDescription: string;
    category: string;
    slug: string;
    thumbnail: {};
    gatsbyImageData: IGatsbyImageData;
  };
};

export type ProjectTypes = {
  clientName: string;
  metaDescription?: string;
  headerImage: {
    file: {
      url: string;
    };
  };
  category: string;
  clientDescription: any;
  clientBrief: any;
  ourWork: any;
  brandCopy: any;
  landscapeCarouselImages: {
    description: string;
    file: {
      url: string;
    };
  }[];
  landscapeImages?: {
    description: string;
    file: {
      url: string;
    };
  }[];
  squareImages: {
    description: string;
    file: {
      url: string;
    };
  }[];
  testimonialText?: string;
  testimonialStaffName?: string;
  testimonialStaffRole?: string;
  gradientLeft: string;
  gradientRight: string;
  interrogative?: string;
};

export type TestimonialTypes = {
  node: {
    clientName: string;
    testimonialText: string;
    testimonialStaffName: string;
    testimonialStaffRole: string;
  };
};

export type ServiceTypes = {
  node: {
    title: string;
    features: string[];
  };
};

export type BlogTypes = {
  node: {
    title: string;
    slug: string;
    metaDescription: string;
    coverImage: ImageDataLike | null;
  };
};

export type StaffMemberTypes = {
  node: {
    name: string;
    bio: Document;
    headshot: {
      file: {
        url: string;
      };
    };
  };
};

export type AboutTypes = {
  body: any;
  teamSectionTitle: string;
  teamSectionText: string;
  serviceSectionTitle: string;
};
