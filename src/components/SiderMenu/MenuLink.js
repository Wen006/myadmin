/* eslint-disable no-script-url */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/react-in-jsx-scope */

import Link from 'umi/link';

export default ({children,to=false,...other}) =>to?<Link to {...other}>{children}</Link>:<a href="#!" {...other}>{children}</a>;