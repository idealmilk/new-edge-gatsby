import React from 'react';

type Props = {
  htmlAttributes: React.HtmlHTMLAttributes<HTMLHtmlElement>;
  headComponents: React.ReactNodeArray;
  bodyAttributes: React.HtmlHTMLAttributes<HTMLBodyElement>;
  preBodyComponents: React.ReactNodeArray;
  body: string;
  postBodyComponents: React.ReactNodeArray;
};

export default function HTML(props: Props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id='___gatsby'
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
      <script src='https://app.enzuzo.com/apps/enzuzo/static/js/__enzuzo-cookiebar.js?uuid=cd6dcf7a-bee0-11ed-af78-b716112fc33c'></script>
    </html>
  );
}
