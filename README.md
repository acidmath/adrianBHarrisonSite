# Creating a personal website

I am going to use this document as a dev journal describing how I built and deployed a personal website

## Domain

At a previous company we used Namecheap and that was really easy so I went to [their site](https://www.namecheap.com/), typed a few domains out, and picked a nice affordable option (~$6/year)

## Web hosting

I did some googling which led me to a helpful [reddit thread](https://www.reddit.com/r/webdev/comments/83taz1/comment/dvkguk1/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button)

Knowing my site will not be demanding and wanting to keep everything affordable, I settled on Netlify

## Linking the domain to Netlify

First step is telling Namecheap that Netlify will serve as the nameserver, [this Namecheap knowledgebase](https://www.namecheap.com/support/knowledgebase/article.aspx/767/10/how-to-change-dns-for-a-domain/) was very helpful

The nameservers in question are provided in the domain page, as described by [this Netlify doc](https://docs.netlify.com/domains-https/netlify-dns/delegate-to-netlify/)

Then, while you're waiting for DNS records to propagate, you can go to <https://www.whatsmydns.net/>, type in your domain, select NS from the dropdown, and hit search until you get some green checkmarks.

TTL (Time To Live) is 3600 seconds (1 hour) by default. This [cloudflare doc](https://developers.cloudflare.com/dns/manage-dns-records/reference/ttl/) does a nice job of explaining TTL, it's basically how long until your new DNS settings take effect.

It took me a lot longer to realize there was a dropdown to select which records you're checking, so I checked my A records for about 8 hours until I tried out the dropdown. Oops!

The final steps I think I did a little out of order, but I'm afraid to do it again so I can only document the order I did.

First I created a site in Netlify with the most basic settings.
I then went to Domains, and clicked Add or register domain and added my newly purchased domain.
I hooked up Netlify to my github repo with their nice "Get started with Netlify" tool at the top of my Sites page.
I then created an index.html at the base of my new repo that consisted of a single h1 tag just to get the thing live.
One "init commit" push later, I returned to netlify, went to my site and then the Deploys section and clicked Publish Deploy.
Netlify made me an automatic little link, but adrianbharrison.com wasn't routing to this.
After reading a bunch of articles, I finally found what I needed in [a document about sub-domains](https://docs.netlify.com/domains-https/netlify-dns/delegate-a-subdomain-to-netlify-dns/) where you go to Sites, click on your site to view its settings, in the left menu go to Domain management, then click on Add domain alias.

A few clicks later I startled my wife with an achievement yelp. Huzzah!

## Getting a SvelteKit site on Netlify

Node.js LTS is installed so it's time to make a svelte project. I emptied the repo folder and backed up to the parent folder of my repo, then ran ```npx sv create adrianBHarrisonSite``` to create the svelte kit app. The rest of the setup can be found [here.](https://svelte.dev/docs/kit/creating-a-project)

I changed the +page.svelte to be a bit more personal, made a pull request to main and netflify automatically deployed the website.

Excitedly I go to see the 2nd iteration of my personal website, which is an error page indicating the site is not able to be located.

Growing leary of adapter-auto's promises to run on Netlify with no configuration, I implemented the changes detailed in the [Netlify build and deploy doc.](https://svelte.dev/docs/kit/adapter-netlify)
Push to main, watch netlify automatically build the site and bow wow, the site works!
