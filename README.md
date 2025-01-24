# Resume

Builds multiple versions of my resume in PDF format.

### Why?

Over-engineered? Probably... but I've rewritten my resume using several different applications over the years. Word processors were too restrictive in layout, always pushing towards sequential document flow. Drawing apps provided the required flexibility, but proved to be very hard to maintain (lots of manual customizations for every change).

Multiply all of that over wanting multiple versions targeting different types of roles and I found myself spending hours making small tweaks and then porting those tweaks to all versions of my resume.

Laying in bed one night, wishing my resume worked more like code, providing composition and the history of source control, I had an idea... why not just write it in code and use react-pdf to format it?

### The stack
- ~~Node.js >=23.6.0 so I can write directly in TypeScript.~~ Turns out [jsx is not supported by node.js](https://nodejs.org/docs/latest-v23.x/api/typescript.html#determining-module-system), so we are still transpiling in order to use react + jsx. 
- Typescript to facilitate refactoring when I need to make those pesky tweaks.
- react-pdf because at the end of the day, I want a pdf.
- react because this is all about the view and I want the flexibility of components.
- react-pdf-tailwind because "css" (or similar in the case of react-pdf) is hard. Atomic css classes provides the right level of abstraction and control.
- xo.js because it's super strict and plug-n-play

### The result
I know have a resume written entirely in code and composed of react components.

I can make changes to the layout, fonts, bullets, etc and those changes are instantly propagated to all versions. I also have the flexibility that each version has differences not only content, but also in layout and styling. As with any good abstraction, I can peel back the layers and make customizations when needed.

Finally, my engineering brain loves that my resume is written in code, giving me ultimate flexibility and consistency. No more having to set a custom hanging indent on multiple lines 🤯.

Let's see how this evolves.