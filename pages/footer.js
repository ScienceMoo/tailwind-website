export default function Footer() {
  return (
    <>
      <footer className="mt-12 flex items-start justify-between w-full h-24 border-t">
        <div>
          <a className="flex items-center justify-center" href="/info">
            More Info
          </a>
          <a className="flex items-center justify-center" href="/auctionTerms">
            Auction Terms
          </a>
          <a href="mailto:hugo.cornellier@gmail.com">Press Inquiries</a>
        </div>
        <div>
          <div>© 2009-2021 Hugo Cornellier</div>
          <a
            className="flex items-center justify-center"
            href="https://www.youtube.com/channel/UCiEBv40OQ7zB68aK3lltQMg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Youtube
          </a>
          <a
            className="flex items-center justify-center"
            href="https://twitter.com/hugo_cornellier"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
      </footer>
    </>
  );
}
