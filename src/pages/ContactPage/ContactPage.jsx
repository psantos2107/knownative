import LandingPageNav from '../../components/LandingPageNav/LandingPageNav';
import LandingPageFooter from '../../components/LandingPageFooter/LandingPageFooter';

export default function ContactPage() {
  return (
    <>
    <div className="container">
    <LandingPageNav />
      <section className="mailing-list">
        <div class="container col-xl-10 col-xxl-8 px-4 py-5">
          <div class="row align-items-center g-lg-5 py-5">
            <div class="col-lg-6 text-center text-lg-start">
              <h1 class="display-6 fw-bold lh-1 mb-5">Sign up for early access</h1>
              <p class="col-lg-10 fs-6">We are planning to release a beta version of KnowNative by the end of 2024!</p> 
              <p class="col-lg-10 fs-6">As an early access member of KnowNative, you'll be able to create an account and build your own personalized study portal, uploading any article you'd like to learn from. Your articles, vocabulary lists and notes will all be saved so you'll never have to worry about losing your progress.</p>
              <p class="col-lg-10 fs-6">Sign up to be notified when this beta version is released for a unique opportunity to be one of KnowNative's first members!</p>
            </div>
            <div class="col-md-10 mx-auto col-lg-6 mt-5">
              <form class="p-4 p-md-5 border rounded-3 bg-light">
                <div class="form-floating mb-3">
                  <input type="text" class="form-control" id="nameInput" placeholder="Name" />
                  <label for="nameInput">Name</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="email" class="form-control" id="emailInput" placeholder="name@example.com" />
                  <label for="emailInput">Email address</label>
                </div>
                <button class="w-100 btn btn-lg sign-up" type="submit">Sign up</button>
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center my-4">
                  <a href="https://www.linkedin.com/in/abigaildawsondev/" className="btn btn-sm px-3 social-links">LinkedIn</a>
                  <a href="https://github.com/AbigailDawson/knownative" target="_blank" rel="noopener noreferrer" className="btn btn-sm px-3 social-links">GitHub</a>
                  <a href="mailto:abigaildawson.dev@gmail.com" target="_blank" rel="noopener noreferrer" className="btn btn-sm px-3 social-links">Email</a>
                  <a href="https://x.com/abigailddev" target="_blank" rel="noopener noreferrer" className="btn btn-sm px-3 social-links">X</a>
                </div>
                <hr class="my-3" />
                <small class="text-muted">KnowNative will never send you spam. Unsubscribe at any time by emailing hello@knownative.com.</small>
              </form>
            </div>
          </div>
        </div>
      </section>
    <LandingPageFooter />
    </div>
    </>
  );
};