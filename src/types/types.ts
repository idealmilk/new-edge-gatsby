import type { IGatsbyImageData } from 'gatsby-plugin-image';

export type ProjectSummary = {
  node: {
    clientName: string;
    metaDescription: string;
    category: string;
    slug: string;
    thumbnail: {};
    gatsbyImageData: IGatsbyImageData;
  };
};

export type Project = {
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

export type Testimonial = {
  node: {
    clientName: string;
    testimonialText: string;
    testimonialStaffName: string;
    testimonialStaffRole: string;
  };
};

export type Service = {
  node: {
    title: string;
    features: string[];
  };
};

export type StaffMember = {
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

export type About = {
  body: any;
  teamSectionTitle: string;
  teamSectionText: string;
  serviceSectionTitle: string;
};
