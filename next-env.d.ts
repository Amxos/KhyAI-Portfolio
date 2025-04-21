/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare namespace React {
  interface ReactNode {
    // Add any additional properties you need
  }
}

declare namespace JSX {
  interface IntrinsicElements {
    // Add any additional elements you need
    html: any;
    head: any;
    body: any;
    link: any;
  }
}
