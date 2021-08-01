import React from "react";
import { Link } from 'react-router-dom'

export interface IUser {
  _id: string,
  email: { type: string, required: true },
  links: {
    github?: string,
    facebook?: string,
    linkedIn?: string,
    personalSite?: string
  },
  programmingLang: string[]
  name?: string,
  phone?: string,
  about?: string,
  profilePicture?: string,
  cv?: { name: string, type: string, size: string, base64: string },
}
export interface ILink {
  child: any,
  href?: string,
  to?: string,
  clickFunc?: (e: any) => void,
  color?: string,
}
export const icons = ((linksOptions: ILink[]) => {
  if (linksOptions.length > 1) return (<ul className='icons'>
    {React.Children.toArray(
      linksOptions.map((link: ILink) => {
        const onClick = (e: any) => { link.clickFunc && link.clickFunc(e); }
        return (
          <li>
            <b>
              {link.href ? <a
                href={link.href}
                children={link.child}
                onClick={onClick}
                style={{ color: link.color || '#333' }}
                target='_blank'
                rel="noreferrer" />

                : link.to ? <Link
                  to={link.to}
                  children={link.child}
                  onClick={onClick}
                  style={{ color: link.color || '#333' }} />

                  : <span
                    className='icon-Btn'
                    onClick={onClick}
                    style={{ color: link.color || '#333' }}
                  >{link.child}</span>}
            </b>
          </li>
        )
      }))}
  </ul>)
  const onClick = (e: any) => { link.clickFunc && link.clickFunc(e); }
  const link = linksOptions[0]
  return (<div className='icons'><b>
    {link.href ? <a
      href={link.href}
      children={link.child}
      onClick={onClick}
      style={{ color: link.color || '#333' }}
      target='_blank'
      rel="noreferrer" />

      : link.to ? <Link
        to={link.to}
        onClick={onClick}
        children={link.child}
        style={{ color: link.color || '#333' }} />

        : <span
          className='icon-Btn'
          onClick={onClick}
          style={{ color: link.color || '#333' }}>{link.child}</span>}
  </b></div>)
})
