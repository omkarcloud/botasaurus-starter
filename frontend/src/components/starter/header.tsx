import {
  EuiCollapsibleNav,
  EuiCollapsibleNavGroup,
  EuiFlexItem,
  EuiHeader,
  EuiHeaderLink,
  EuiHeaderSectionItemButton,
  EuiIcon,
  EuiListGroup,
  EuiListGroupItem,
  EuiTitle,
  useGeneratedHtmlId,
} from '@elastic/eui';
import { useState } from 'react';

import Links from '../../utils/data/links';
import { Link } from '../Link';


function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 32 32"
    >
      <path
        fill="#FF5B00"
        d="M4.684 4.752H27.311V27.378999999999998H4.684z"
      ></path>
      <path
        fill="#FF5B00"
        d="M0 16H22.627V38.626999999999995H0z"
        transform="rotate(-45 0 16)"
      ></path>
      <circle cx="15.996" cy="16.065" r="10.409" fill="#FF0"></circle>
      <path
        fill="#FF5B00"
        d="M15.996 7.392c4.783 0 8.674 3.89 8.674 8.673 0 4.783-3.89 8.674-8.674 8.674-4.782 0-8.673-3.89-8.673-8.674 0-4.782 3.89-8.673 8.673-8.673zm0-1.735c-5.748 0-10.408 4.66-10.408 10.408 0 5.748 4.66 10.409 10.409 10.409 5.748 0 10.408-4.66 10.408-10.409 0-5.748-4.66-10.408-10.409-10.408zm4.777 12.092c-1.311 1.037-2.753 1.675-4.776 1.675-2.024 0-3.466-.639-4.777-1.675l-.428.428c.978 1.492 2.776 3.093 5.205 3.093 2.429 0 4.226-1.601 5.204-3.093l-.428-.428zm-7.812-5.153a1.301 1.301 0 100 2.602 1.301 1.301 0 000-2.602zm6.071 0a1.301 1.301 0 100 2.602 1.301 1.301 0 000-2.602z"
      ></path>
      <path
        fill="#FF0"
        fillRule="evenodd"
        d="M15.996 26.474c5.749 0 10.41-4.66 10.41-10.409 0-5.748-4.661-10.408-10.41-10.408-5.748 0-10.408 4.66-10.408 10.408 0 5.749 4.66 10.409 10.409 10.409zm.001-3.122a7.286 7.286 0 100-14.573 7.286 7.286 0 000 14.573z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}


function HeaderLogo({ header_title, white = false }) {

  return (
    <Link href="/" passHref>
      <a className='items-center logo'>
        <div ><Logo /></div>
        {header_title && (
          <EuiTitle size="xxs" className='title-lh'>
            <span style={white ? { color: '#ffffff' } : undefined}>
              {header_title}
            </span>
          </EuiTitle>
        )}
      </a>
    </Link>
  )
}

function RightHeader({ text, link }) {

  return link ? (
    <EuiHeaderLink style={{ color: '#ffffff' }} href={link} target="_blank">
      {text}
    </EuiHeaderLink>
  ) : (
    <EuiTitle size="xxs" className='title-lh'>
      <span style={{ color: '#ffffff' }}>{text}</span>
    </EuiTitle>
  )
}

const Header = ({ header_title, right_header }) => {
  const guideHeaderCollapsibleNavId = useGeneratedHtmlId({
    prefix: 'guideHeaderCollapsibleNav',
  })

  const [navIsOpen, setNavIsOpen] = useState(false)

  const collapsibleNav = (
    <EuiCollapsibleNav
      key="collapsible-nav"
      id={guideHeaderCollapsibleNavId}
      aria-label="Main navigation"
      isOpen={navIsOpen}
      isDocked={false}
      button={
        <EuiHeaderSectionItemButton
          aria-label="Toggle main navigation"
          onClick={() => setNavIsOpen(!navIsOpen)}>
          <EuiIcon type={'menu'} size="m" aria-hidden="true" />
        </EuiHeaderSectionItemButton>
      }
      onClose={() => setNavIsOpen(false)}>
      <EuiFlexItem className="eui-yScroll">
        <EuiCollapsibleNavGroup
          className="h-full child-h-full"
          background="none">
          <EuiListGroup
            maxWidth="none"
            color="subdued"
            gutterSize="none"
            size="s">
            {Links.home && (
              <Link href={Links.home} passHref>
                <EuiListGroupItem label="Home" />
              </Link>
            )}
          </EuiListGroup>
        </EuiCollapsibleNavGroup>
      </EuiFlexItem>
    </EuiCollapsibleNav>
  )

  const header_items: any = [
    {
      items: [
        collapsibleNav,
        <div className="w-6" key="spacer" />, // Added key for list item
        <HeaderLogo key="logo" header_title={header_title} white />,
      ],
      borders: 'none',
    },
  ]

  if (right_header?.text) {
    header_items.push({
      items: [<RightHeader key="right-header" {...right_header} />],
      borders: 'none',
    })
  }

  return (
    <>
      <EuiHeader
        role="navigation"
        position="fixed"
        theme="dark"
        sections={header_items}
      />
    </>
  )
}

export default Header
