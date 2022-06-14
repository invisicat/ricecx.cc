import Layout from '@/components/layout/Layout';
import Image from 'next/image';

const ContactPage = () => {
  return (
    <Layout title="RiceCX - Contact">
      <div id="rootInfo" className="my-12 h-screen">
        <div className="flex xs:flex-col lg:flex-row justify-evenly mx-4">
          <div id="contactinfo" className="flex flex-col">
            <Image
              src="/images/github_avatar.jpg"
              width="384"
              height="384"
              alt="avatar"
              className="rounded-full"
            />
          </div>
          <div className="mx-auto max-w-xl my-auto">
            <h1 className="xs:text-center mx-auto text-5xl font-semibold leading-tight">
              Get in touch with me.
            </h1>
            <br />
            <p className="text-xl leading-loose">
              My preferred way of contact is through Discord. If you wish to
              talk to me, my Discord is <code>AndyIsCool5463#5230</code>. If I
              do not respond or you wish to contact me on legal terms, please
              use my business email at <address>contact@ricecx.cc</address>
            </p>
            <br />
            <p className="text-xl leading-loose">
              I am willing to work with you on projects as long as they are
              civil, causes no harm, and nor is illegal by any means. As long as
              we can communicate I think we will work fine together : &lpar;
            </p>
            <br />
            <p className="text-xl leading-loose">
              If you would like to have a commission done, you can do so through
              my Ko-Fi link below. <br />
              <a
                href="https://ko-fi.com/M4M026ALH"
                rel="noreferrer"
                target="_blank"
              >
                <Image
                  height={48}
                  width={162}
                  style={{ border: '0px' }}
                  src="https://cdn.ko-fi.com/cdn/kofi5.png?v=3"
                  alt="Buy Me a Coffee at ko-fi.com"
                />
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
