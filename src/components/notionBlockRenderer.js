/* eslint-disable */

import React from 'react';
import { A, B, Code, Div, H1, H2, H3, H4, I, Img, Li, Ol, P, Pre, S, Ul } from "@reflexjs/components"
import hljs from 'highlight.js/lib/highlight';
import hljs_python from 'highlight.js/lib/languages/python';
import hljs_javascript from 'highlight.js/lib/languages/javascript';
import hljs_typescript from 'highlight.js/lib/languages/typescript';
import hljs_bash from 'highlight.js/lib/languages/bash';
import hljs_plaintext from 'highlight.js/lib/languages/plaintext';
import hljs_json from 'highlight.js/lib/languages/json';

import 'highlight.js/styles/agate.css';

// see: https://github.com/highlightjs/highlight.js
hljs.registerLanguage('plaintext', hljs_plaintext);
hljs.registerLanguage('python', hljs_python);
hljs.registerLanguage('javascript', hljs_javascript);
hljs.registerLanguage('typescript', hljs_typescript);
hljs.registerLanguage('bash', hljs_bash);
hljs.registerLanguage('json', hljs_json);

const notionLanguageToHljs = {
  'Plain Text': 'plaintext',
  Python: 'python',
  JavaScript: 'javascript',
  Bash: 'bash',
  JSON: 'json'
};

function renderBlockImage(meta) {
  return (
    <Div>
      <Img
        src={meta.publicImageUrl}
        style={{ width: `${meta.width}px` }}
        alt=""
      />
    </Div>
  );
}

function renderBlockCode(children, meta) {
  const hlslanguage = notionLanguageToHljs[meta.language] || 'plaintext';
  const highlightedCode = hljs.highlight(hlslanguage, meta.title).value;
  return <Pre pl="4" dangerouslySetInnerHTML={{ __html: highlightedCode }} />;
}

function renderBlockText(children) {
  return <P>{children}</P>;
}

function renderBlockHeader(children, level) {
  switch (level) {
    case 1:
      return <H2 className="has-text-primary has-background-white-bis subtitle is-2">{children}</H2>;
    case 2:
      return <H3 className="has-text-primary has-background-white-bis subtitle is-3">{children}</H3>;
    case 3:
    default:
      return <H4 className="has-text-primary has-background-white-bis subtitle is-5">{children}</H4>;
  }
}

function renderBulletedList(children) {
  return (
    <Div>
      <Ul>{children}</Ul>
    </Div>
  );
}

function renderNumberedList(children) {
  return (
    <Div>
      <Ol>{children}</Ol>
    </Div>
  );
}

function renderListItem(children) {
  return <Li>{children}</Li>;
}

function renderPage(children) {
  return <Div>{children}</Div>;
}

function renderBlock(type, meta, children) {
  switch (type) {
    case 'page':
      return renderPage(children);

    case 'text':
      return renderBlockText(children);

    case 'code':
      return renderBlockCode(children, meta);

    case 'image':
      return renderBlockImage(meta);

    case 'header':
      return renderBlockHeader(children, 1);

    case 'sub_header':
      return renderBlockHeader(children, 2);

    case 'sub_sub_header':
      return renderBlockHeader(children, 3);

    case 'bulleted_list':
      return renderBulletedList(children);

    case 'numbered_list':
      return renderNumberedList(children);

    case 'numbered_list__item':
      return renderListItem(children);

    case 'bulleted_list__item':
      return renderListItem(children);

    case '__meta':
      // we don't parse this block - it contains the pahe meta information such as the slug
      return null;

    default:
      console.log('@@@ unknow type to render>renderBlock>', type);
      return null;
  }
}

function mkRenderFuncs(_notionPageDoc) {
  return {
    wrapText: text => {
      return <React.Fragment>{text}</React.Fragment>;
    },
    renderTextAtt: (children, att) => {
      switch (att) {
        case 'i':
          return <I>{children}</I>;
        case 'b':
          return <B>{children}</B>;
        case 's':
          return <S>{children}</S>;
        case 'c':
          return <Code>{children}</Code>;
        default:
          console.log(`@@@ no text attribute for: ${att}`);
      }
    },
    renderLink: (children, ref) => {
      return <A href={ref}>{children}</A>;
    },
    renderBlock: (type, meta, children) => {
      return renderBlock(type, meta, children);
    },
  };
}

const NotionBlockRenderer = ({ data, renderer, debug }) => {
  const { notionPageDoc } = data;
  const renderFuncs = mkRenderFuncs(notionPageDoc);
  const child = renderer.render(renderFuncs);
  return (
    <Div>
      <H1>{notionPageDoc.title}</H1>
      <Div>{child}</Div>
      {debug && (
        <Div>
          <H2>notionPageDoc:</H2>
          <Pre>{JSON.stringify(notionPageDoc, null, '  ')}</Pre>
        </Div>
      )}
    </Div>
  );
};

export default NotionBlockRenderer;
