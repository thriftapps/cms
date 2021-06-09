import type { CmsCollection } from 'netlify-cms-core';
import { DynamicHomeContent, HeroAngleImageOnRight, HeroAppWithScreenShot, HeroSimpleCentered, HeroSplitImage, HeroWithSignUpVideo } from '../templates';
import { ContactCard } from '../templates/contact';
import { CtaBranPanel, CtaSimpleCentered, CtaSimpleJustified, CtaSimpleStacked, CtaSplitWithImage } from '../templates/cta';
import { Featured3Col, FeaturedCenter2By2, FeaturedOffset2By2Grid } from '../templates/featured';
import { LogoSimple, LogosSplitGrid, LogosWithHeaderCentered } from '../templates/logos';
import { NewsletterCustomBg, NewsletterOnCard, NewsletterSimpleStacked } from '../templates/newsletter';
import { PricingSingle, PricingThreeTier, PricingTwoTier } from '../templates/pricing';
import { TeamSection, TeamShortParagraph } from '../templates/team';
import { TestimonialSideBySide, TestimonialSimpleCentered, TesttimonialWithLargeAvatar } from '../templates/testimonial';

let home_page:CmsCollection= {
    "name": "home_page",
    "label": "Home Page Builder",
    "editor": {
        "preview": false
    },
    "files": [
        {
            "file": "/content/_index.md",
            "label": "Build Homepage Section By Section",
            "name": "home_index",
            "fields": [
                {
                    "label": "Title",
                    "name": "title",
                    "widget": "string"
                },
                {
                    "label": "Description",
                    "name": "description",
                    "widget": "string"
                },
                {
                    "label": "Feature Image",
                    "name": "featured_image",
                    "widget": "image"
                },
                {
                    "label": "Publish Date",
                    "name": "date",
                    "widget": "datetime"
                },
                {
                    "label": "Show Search",
                    "name": "showsearch",
                    "widget": "boolean",
                    "default": true
                },
                {
                    "label": "Show Cart",
                    "name": "showcart",
                    "widget": "boolean",
                    "default": true
                },
                {
                    "label": "Home Sections",
                    "name": "sections",
                    "widget": "list",
                    "label_singular": "Template",
                    "types": [
                       DynamicHomeContent, 
                       HeroSimpleCentered,
                       HeroSplitImage,
                       HeroAngleImageOnRight,
                       HeroAppWithScreenShot,
                       HeroWithSignUpVideo,
                       FeaturedCenter2By2,
                       FeaturedOffset2By2Grid,
                       Featured3Col,
                       CtaBranPanel,
                       CtaSimpleCentered,
                       CtaSimpleJustified,
                       CtaSimpleStacked,
                       CtaSplitWithImage, 
                       TestimonialSimpleCentered,
                       TestimonialSideBySide,
                       TesttimonialWithLargeAvatar,
                       TeamShortParagraph,
                       TeamSection,
                       NewsletterSimpleStacked,
                       NewsletterOnCard,
                       NewsletterCustomBg,
                       LogosWithHeaderCentered,
                       LogoSimple,
                       LogosSplitGrid,
                       PricingSingle,
                       PricingTwoTier,
                       PricingThreeTier,
                       ContactCard,
                    ]
                }
            ]
        }
    ]
};
export { home_page };
