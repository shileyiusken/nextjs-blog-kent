import React from 'react'
import PaddingContainer from '../layout/padding-container'
import SocialLinks from '../elements/social-links'
import siteConfig from '@/config/site'

const Footer = () => {
  return (
    <div className='py-8 mt-10 border-t'>
      <PaddingContainer>
        <div className="">
          <h2 className='text-3xl font-bold'>{siteConfig.siteName}</h2>
          <p className='max-w-md mt-2 text-lg text-neutral-700'>{siteConfig.description}</p>
        </div>
        {/* Social and currently at */}
        <div className="mt-6 flex justify-between gap-4 flex-wrap">
          <div className="">
            <div className="font-medium text-lg">#exploretheworld</div>
            <div className="flex items-center mt-2 gap-3 text-neutral-600">
              <SocialLinks platform='twitter' link={siteConfig.socialLinks.twitter} />
              <SocialLinks platform='instagram' link={siteConfig.socialLinks.instagram} />
              <SocialLinks platform='github' link={siteConfig.socialLinks.github} />
              <SocialLinks platform='youtube' link={siteConfig.socialLinks.youtube} />
              <SocialLinks platform='linkedin' link={siteConfig.socialLinks.linkedin} />
            </div>
          </div>
          <div className="">
            <div className="text-sm text-neutral-400">Currently At</div>
            <div className="bg-white shadow-md rounded-md px-3 py-2 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
              {siteConfig.currentlyAt}
            </div>
          </div>
        </div>
        {/* bottom section */}
        <div className="border-t py-3 flex flex-wrap items-center justify-between gap-4 mt-16">
          <div className="text-sm text-neutral-400">
            All rights are reserved | copyright © {new Date().getFullYear()}
          </div>
          <div className="text-sm">Made with ♡ by Shileyiusken M.</div>
        </div>
      </PaddingContainer>
    </div>
  )
}

export default Footer