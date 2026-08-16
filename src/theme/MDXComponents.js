import MDXComponents from '@theme-original/MDXComponents';
import {
  Callout,
  Card,
  Cards,
  Endpoint,
  Pill,
  Step,
  Steps,
} from '@site/src/components/Docs';
import EnterpriseContactForm from '@site/src/components/EnterpriseContactForm';

// Available in every .md/.mdx page without an import.
export default {
  ...MDXComponents,
  Cards,
  Card,
  Callout,
  Pill,
  Steps,
  Step,
  Endpoint,
  EnterpriseContactForm,
};
