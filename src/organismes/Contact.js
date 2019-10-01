import React from 'react';

const Contact = () => {
    return (
        <>
            <section class="hero">
                <div class="container">
                <div class="hero-content pb-5 text-center">
                    <h1 class="hero-heading">Contact</h1>
                    <div class="row">   
                    <div class="col-xl-8 offset-xl-2"><p class="lead text-muted">Are you curious about something?  As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built party world. Of so am he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity.</p></div>
                    </div>
                </div>
                </div>
            </section>

            <section style={{background: "#fafafa;"}} class="py-6">   
                <div class="container">       
                    <div class="row">
                    <div class="col-md-4 text-center text-md-left">
                        <svg class="svg-icon svg-icon-light text-primary w-3rem h-3rem mb-3">
                        <use xlinkHref="#navigation-map-1">
                        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" id="navigation-map-1">
                        <title>Navigation Map</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path d="M24.4 32.8L20 33.9l-18-6v28L20 62l24-6.1 18 5v-27l-12-4m-30 4V62m24-24v17.9" stroke-miterlimit="10" stroke="#202020" fill="none" data-name="layer2" stroke-linejoin="round" stroke-linecap="round" style={{stroke:"var(--layer1, #202020)"}}></path>
                        <path stroke-miterlimit="10" stroke="#202020" fill="none" d="M32 2a14 14 0 0 0-14 14c0 12.6 14 26 14 26s14-13.4 14-26A14 14 0 0 0 32 2z" data-name="layer1" stroke-linejoin="round" stroke-linecap="round" style={{stroke:"var(--layer1, #202020)"}}></path>
                        <circle stroke-miterlimit="10" stroke="#202020" fill="none" r="4" cy="16" cx="32" data-name="layer1" stroke-linejoin="round" stroke-linecap="round" style={{stroke:"var(--layer1, #202020)"}}></circle>
                      </svg>
                        </use>
                        </svg>
                        <h4 class="ff-base">Address</h4>
                        <p class="text-muted">13/25 New Avenue<br />New Heaven, 45Y 73J<br />England, <strong>Great Britain</strong></p>
                    </div>
                    <div class="col-md-4 text-center text-md-left">
                        <svg class="svg-icon svg-icon-light text-primary w-3rem h-3rem mb-3">
                        <use xlinkHref="#audio-call-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="audio-call-1">
                        <title>Audio Call</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" d="M32 62a30 30 0 1 1 28.9-22M32 62c15.5 0 22.8-9.3 16.7-15.4" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" style={{stroke:"var(--layer1, #202020)"}}></path>
                        <path data-name="layer1" d="M49.1 40c.8.5 2.1 1.3 1.8 3a8.6 8.6 0 0 1-8.1 6c-5.4 0-12-4.2-17.8-10.1S15 26.5 15 21.1a8.6 8.6 0 0 1 6-8.1c1.7-.2 2.4 1 3 1.8l4.1 6.2a2.9 2.9 0 0 1-.8 3.9c-1.7 1.4-3.6 2.2 2.9 8.7s7.3 4.7 8.7 2.9a2.9 2.9 0 0 1 3.9-.8z" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" style={{stroke:"var(--layer1, #202020)"}}></path>
                      </svg>
                        </use>
                        </svg>
                        <h4 class="ff-base">Call center</h4>
                        <p class="text-muted">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p class="text-muted"><strong>+33 555 444 333</strong></p>
                    </div>
                    <div class="col-md-4 text-center text-md-left">
                        <svg class="svg-icon svg-icon-light text-primary w-3rem h-3rem mb-3">
                        <use xlinkHref="#mail-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="mail-1">
                        <title>Mail</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path data-name="layer2" fill="none" stroke="#202020" stroke-miterlimit="10" d="M2 12l30 29 30-29M42 31.6L62 52M2 52l20-20.4" stroke-linejoin="round" stroke-linecap="round" style={{stroke:"var(--layer1, #202020)"}}></path>
                        <path data-name="layer1" fill="none" stroke="#202020" stroke-miterlimit="10" d="M2 12h60v40H2z" stroke-linejoin="round" stroke-linecap="round" style={{stroke:"var(--layer1, #202020)"}}></path>
                      </svg>
                        </use>
                        </svg>
                        <h4 class="ff-base">Electronic support</h4>
                        <p class="text-muted">Please feel free to write an email to us or to use our electronic ticketing system.</p>
                        <ul class="list-unstyled text-muted">
                        <li>info@sell.com</li>
                        <li>support@sell.com</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </section>
            <section class="py-6">
      <div class="container">
        <header class="mb-5">
          <h2 class="text-uppercase h5">Contact form</h2>
        </header>
        <div class="row">
          <div class="col-md-7 mb-5 mb-md-0">
            <form id="contact-form" method="post" action="contact.php" class="form">
              <div class="controls">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="name" class="form-label">Your firstname *</label>
                      <input type="text" name="name" id="name" placeholder="Enter your firstname" required="required" class="form-control" />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="surname" class="form-label">Your lastname *</label>
                      <input type="text" name="surname" id="surname" placeholder="Enter your  lastname" required="required" class="form-control" />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="email" class="form-label">Your email *</label>
                  <input type="email" name="email" id="email" placeholder="Enter your  email" required="required" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="message" class="form-label">Your message for us *</label>
                  <textarea rows="4" name="message" id="message" placeholder="Enter your message" required="required" class="form-control"></textarea>
                </div>
                <button type="submit" class="btn btn-outline-dark">Send message</button>
              </div>
            </form>
          </div>
          <div class="col-md-5">
            <p class="text-muted">Effects present letters inquiry no an removed or friends. Desire behind latter me though in. Supposing shameless am he engrossed up additions. My possible peculiar together to. Desire so better am cannot he up before points. Remember mistaken opinions it pleasure of debating. Court front maids forty if aware their at. Chicken use are pressed removed. </p>
            <p class="text-muted">Able an hope of body. Any nay shyness article matters own removal nothing his forming. Gay own additions education satisfied the perpetual. If he cause manor happy. Without farther she exposed saw man led. Along on happy could cease green oh. </p>
            <div class="social">
              <ul class="list-inline">
                <li class="list-inline-item"><a href="#" target="_blank"><i class="fab fa-twitter"></i></a></li>
                <li class="list-inline-item"><a href="#" target="_blank"><i class="fab fa-facebook"></i></a></li>
                <li class="list-inline-item"><a href="#" target="_blank"><i class="fab fa-instagram"></i></a></li>
                <li class="list-inline-item"><a href="#" target="_blank"><i class="fab fa-pinterest"></i></a></li>
                <li class="list-inline-item"><a href="#" target="_blank"><i class="fab fa-vimeo"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    
        </>
    );
}

export default Contact;
