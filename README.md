This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

to host on a static site:
install serve 
```bash
npm i -g serve
```
in your package-json.build, insert '&&next export' next to 'next build'.

A folder 'out'  with th static files of your webiste be created
Then run
```bash
serve -s out -p 8000
```
To host your website on a server at port 8000

To view your website go to
```bash
http://localhost:8000
```
