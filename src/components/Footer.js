function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="mx-5 my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          <div className="px-5 py-2">
            <a
              href="/about"
              className="text-base text-gray-500 hover:text-gray-900"
            >
              About
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="/blog"
              className="text-base text-gray-500 hover:text-gray-900"
            >
              Blog
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="/jobs"
              className="text-base text-gray-500 hover:text-gray-900"
            >
              Jobs
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="/press"
              className="text-base text-gray-500 hover:text-gray-900"
            >
              Press
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="/accessibility"
              className="text-base text-gray-500 hover:text-gray-900"
            >
              Accesibility
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="/partners"
              className="text-base text-gray-500 hover:text-gray-900"
            >
              Partners
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
