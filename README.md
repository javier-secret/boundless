# Boundless UI test notes

## Considerations
### Browser support:
In general I tried to use techniques which would provide a good experience on most major browsers back two versions and maintain usability on much older browsers.  Notable exceptions are the use of flexbox for layout which requires some additional work to support ie10.  Also the use of data-uris in html psuedo elements could fail in some older browsers.  These were tradeoffs I made in order to keep time on the project reasonable.  If I were preparing this for a production build I would have included a few more steps to the build pipeline to add browser specific prefixes and compile in any shivs deemed necessary.

### Accessibility:
A landing page should be easily viewable by all, so I tried to make sure that the actual html markup was as semantic and uncluttered as possible.  Items which do not add to the content were pulled into backgrounds and psuedo-elements.  There are changes to the design of the page that I would recommend for increased usability by certain types of users but I opted not to modify the design preemptively and save that for a conversation.

### SEO
SEO is crucial for landing pages but I am not an SEO expert.  The site is lightweight, content is prioritized and appropriate semantic tags have been added.  Beyond that I would have to do more detailed research on the current state of SEO for the search engines used by our target markets.

### Internationalization:
There's nothing specific here to enable internationalization other than keeping content clear in the DOM.  I would have to do more research, but if I were intending to serve this page to certain markets I would make sure that any fonts being loaded were being loaded from our servers.  These servers should be owned by an entity with a good track record of reliability in the target region.

### Speed:
Some enhancements could be made here in terms of optimizing the CSS for speed.  In general the page loads acceptably but given time I would like to run it through some profiling and cut some things down.  I tried to follow a mobile-first workflow where styles are progressively added via breakpoints.  This means that the browser will not attempt to render unnecessary styles

### Responsiveness:
All components were developed starting at a small screen size and working up from there.  At small sizes the site becomes very simple which seems fine to me.  However if I understood the content and intended purpose of the site more concretely I may have made different choices.

### Development workflow and consistency
I wanted to make sure that it was easy to develop a component in isolation while still being able to easily see it in context.  I also wanted to make sure that the base styles for a component would always be up to date and in a predictable place that could just be pulled in via a package manager.  To accomplish this I used ```yarn link``` and set up gulp tasks such that the main project would immediately show changes to components made in the base library.  This was very helpful in development.  Given more time and context I would put more work into automating the creation of build scripts for new projects as there is a good amount of duplication between the build scripts.

One thing I don't know, not having done much react, are the best practices for keeping a component library in react that can easily share styles with non-react sites.