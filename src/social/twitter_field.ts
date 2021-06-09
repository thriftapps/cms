import type { CmsFieldBase, CmsFieldObject } from 'netlify-cms-core';

type Field= CmsFieldBase & CmsFieldObject;
let field:Field = {
    "label": "Twitter",
    "name": "twitter",
    "widget": "object",
    "fields": [
        {
            "label": "Link",
            "name": "link",
            "widget": "string",
            "pattern": [
                "(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})",
                "ONLY VALID URL ALLOWED!"
            ]
        },
        {
            "label": "Icon",
            "name": "icon",
            "widget": "image",
            "required": false,
            "default": "/images/twitter.svg"
        }
    ]
};
export default field;
