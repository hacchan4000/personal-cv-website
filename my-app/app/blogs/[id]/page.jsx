import React from 'react'
import { blogs, blogs2 } from '@/public/Assets/blogs_data'
import { assets } from '@/public/Assets/assets'
import { IoLogoFacebook, IoLogoTwitter, IoLogoGoogle} from "react-icons/io5";
import Footer from '@/app/components/Footer'
import Link from 'next/link'


import Image from 'next/image'


const Page = async ({ params }) => {
  const { id } = await params // ✅ must await params now
  const blogId = Number(id)

  let data = blogs.find(b => b.id === blogId) || blogs2.find(b => b.id === blogId)
  const hari = new Date(data.date)
  const formatted = hari.toISOString().split('T')[0];

  return ( data?<>
    <div className="text-white py-5 px-5 md:px-12 lg:px-28">
      <Link href={'/'}>
        <h1 className='absolute text-[30px]'>HOME</h1>
      </Link>
      
      <div className='flex justify-end items-center'>
        <button className='flex items-center gap-2 py-1 px-3 sm:py-3 sm:px-6 border-2 border-white rounded-full'>Subscribe</button>
        <Image src={assets.menu} alt='' className='w-13 ml-8' />
      </div>
      <div className='text-center my-20'>
        <h3 className='my-10'>{data.category}</h3>
        <h1 className='text-[50px] sm:text-5xl max-w-[700px] mx-auto'>{data.title}</h1>
        <h2 className='mt-10'>By {data.author}</h2>
        <h2>{formatted}</h2>
        <img src={data.img} width={600} height={600} alt={data.title} className='mx-auto mt-6'/>
      </div>
    </div>
    <div className='mx-5 max-w-[800px] md:mx-auto mb-5 font-serif text-justify' >
      <p>
        If someone so much as says “my boyf–” on social media, 
        they’re muted. There’s nothing I hate more than following someone for fun, 
        only for their content to become “my boyfriend”-ified suddenly. This is 
        probably because, for so long, it felt like we were living in what one of my 
        favorite Substackers calls Boyfriend Land: a world where women’s online identities 
        centered around the lives of their partners, a situation rarely seen reversed. 
        Women were rewarded for their ability to find and keep a man, with elevated social status and praise. 
        It became even more suffocating when this could be leveraged on social media for engagement and, 
        if you were serious enough, financial gain.
      </p>
      <p className='mt-10'>
        However, more recently, there’s been a pronounced shift in the way people showcase their relationships 
        online: far from fully hard-launching romantic partners, straight women are opting for subtler signs—a hand 
        on a steering wheel, clinking glasses at dinner, or the back of someone’s head. On the more confusing end, 
        you have faces blurred out of wedding pictures, or entire professionally edited videos with the fiancé conveniently 
        cropped out of all shots. Women are obscuring their partner’s face when they post, as if they want to erase the fact
         they exist without actually not posting them.
      </p>
      <p className='mt-10'>
        So, what gives? Are people embarrassed by their boyfriends now? Or is something more complicated going on? To me, 
        it feels like the result of women wanting to straddle two worlds: one where they can receive the social benefits of 
        having a partner, but also not appear so boyfriend-obsessed that they come across as quite culturally loser-ish. 
        “They want the prize and celebration of partnership, but understand the norminess of it,” says Zoé Samudzi, writer 
        and activist. In other words, in an era of widespread heterofatalism, women don’t want to be seen as being all about 
        their man, but they also want the clout that comes with being partnered.
      </p>
      <p>
        But it’s not all about image. When I did a callout on Instagram, plenty of women told me that they were, in fact, 
        superstitious. Some feared the “evil eye,” a belief that their happy relationships would spark a jealousy so strong in 
        other people that it could end the relationship. Others were concerned about their relationship ending, and then being 
        stuck with the posts. “I was in a relationship for 12 years and never once posted him or talked about him online. We 
        broke up recently, and I don’t think I will ever post a man,” says Nikki, 38. “Even though I am a romantic, I still 
        feel like men will embarrass you even 12 years in, so claiming them feels so lame.”
      </p>
      <p className='mt-10'>
        But there was an overwhelming sense, from single and partnered women alike, that regardless of the relationship, being 
        with a man was an almost guilty thing to do. On the Delusional Diaries podcast, fronted by two New York-based influencers, 
        Halley and Jaz, they discuss whether having a boyfriend is “lame” now. “Why does having a boyfriend feel Republican?” read 
        a top comment. “Boyfriends are out of style. They won’t come back in until they start acting right,” read another with thousands 
        of likes. In essence, “having a boyfriend typically takes hits on a woman’s aura,” as one commenter claimed. Funnily enough, 
        both of these hosts have partners, which is something I often see online. Even partnered women will lament men and heterosexuality—partly
        in solidarity with other women, but also because it is now fundamentally uncool to be a boyfriend-girl.
      </p>
      <p className='mt-10'>
        It’s not just in these women’s imaginations—audiences are icked out by seeing too much boyfriend content, myself included, 
        it seems (as indicated by my liberal use of the mute button). When author and British Vogue contributor Stephanie Yeboah 
        hard-launched her boyfriend on social media, she lost hundreds of followers. “Even if we were still together, I wouldn’t post them 
        here. There is something cringey and embarrassing about constantly posting your partner these days,” she tells me, adding that, 
        “there is part of me that would also feel guilty for sharing my partner constantly—especially when we know the dating landscape is 
        really bad at the moment. I wouldn’t want to be boastful.”
      </p>

      <div className='my-20'>
        <p className='my-4'>Share this article on social media</p>
        <div className='flex text-3xl gap-5'>
          <IoLogoFacebook />
          <IoLogoTwitter />
          <IoLogoGoogle />
        </div>
      </div>
    </div>
    <Footer/>
    </>:<></>
  )
}

export default Page
