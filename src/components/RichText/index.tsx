import * as React from 'react';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer';

type Props = {
  document: any;
};

const RichText = ({ document }: Props) => {
  const options: Options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children: React.ReactNode) => (
        <h2>{children}</h2>
      ),
      [BLOCKS.HEADING_2]: (node, children: React.ReactNode) => (
        <h2>{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node, children: React.ReactNode) => (
        <h3>{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (node, children: React.ReactNode) => (
        <h4>{children}</h4>
      ),
      [BLOCKS.HEADING_5]: (node, children: React.ReactNode) => (
        <h5>{children}</h5>
      ),
      [BLOCKS.PARAGRAPH]: (node, children: React.ReactNode) => (
        <p>{children}</p>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const image: IGatsbyImageData | undefined = getImage(node.data.target);
        if (image) {
          return <GatsbyImage image={image} alt='NewEdge Studio' />;
        }
      },
      [INLINES.HYPERLINK]: (node, children: React.ReactNode) => {
        if (node.data.uri.indexOf('youtube.com/embed') !== -1) {
          return (
            <iframe
              width='100%'
              height='321'
              src={node.data.uri}
              title='YouTube'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          );
        } else {
          return (
            <a
              href={node.data.uri}
              target={`${
                node.data.uri.startsWith('https://www.newedgestud.io/')
                  ? '_self'
                  : '_blank'
              }`}
              rel={`${
                node.data.uri.startsWith('https://www.newedgestud.io/')
                  ? ''
                  : 'noopener noreferrer'
              }`}
            >
              {children}
            </a>
          );
        }
      },
    },
    renderText: (text: string) =>
      text
        .split('\n')
        .flatMap((textSegment, index) => [
          index > 0 && <br key={index} />,
          textSegment,
        ]),
  };
  return <div>{documentToReactComponents(document, options)}</div>;
};

export default RichText;

// [BLOCKS.HEADING_1]: (children: React.ReactNode) => <h1>{children}</h1>,
//       [BLOCKS.HEADING_2]: (children: React.ReactNode) => <h2>{children}</h2>,
//       [BLOCKS.HEADING_3]: (children: React.ReactNode) => <h3>{children}</h3>,
//       [BLOCKS.HEADING_4]: (children: React.ReactNode) => <h4>{children}</h4>,
//       [BLOCKS.HEADING_5]: (children: React.ReactNode) => (
//         <div>
//           <h5>{children}</h5>
//         </div>
//       ),
//       [BLOCKS.PARAGRAPH]: (children: React.ReactNode) => <p>{children}</p>,
//       [BLOCKS.EMBEDDED_ASSET]: (node: Node) => {
//         const image: IGatsbyImageData | undefined = getImage(node.data.target);
//         if (image) {
//           return <GatsbyImage image={image} alt='NewEdge Studio' />;
//         }
//       },
//       [INLINES.HYPERLINK]: (node: Node) => {
//         if (node.data.uri.indexOf('youtube.com/embed') !== -1) {
//           return (
//             <iframe
//               width='100%'
//               height='321'
//               src={node.data.uri}
//               title='YouTube'
//               allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
//               allowFullScreen
//             ></iframe>
//           );
//         } else {
//           return (
//             <a
//               href={node.data.uri}
//               target={`${
//                 node.data.uri.startsWith('https://www.newedgestud.io/')
//                   ? '_self'
//                   : '_blank'
//               }`}
//               rel={`${
//                 node.data.uri.startsWith('https://www.newedgestud.io/')
//                   ? ''
//                   : 'noopener noreferrer'
//               }`}
//             >
//               {node.content[0].value}
//             </a>
//           );
//         }
//       },
