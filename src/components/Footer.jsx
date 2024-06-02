const Footer = () => {
  // contact form?
  // social media links?
  // email?
  // developer info?
  return ( 
    <>
      <footer className="text-center py-6 pt-12 px-4">
        <p className="pb-2">Copyright &copy; 2024</p>
        <div className="pt-2 border-deep border-t-2">
          <p className="flex justify-center">
            Built by
            <a href="https://github.com/connorwarme" aria-label="Link to developer GitHub page" className="font-display underline decoration-deep pl-1">Connor Warme</a>
          </p>
        </div>
      </footer>
    </>
   );
}
 
export default Footer;