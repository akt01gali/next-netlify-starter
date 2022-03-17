import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
<section id="contact-form" class="contact-form wf-section">
         <div class="container-2 w-container">
            <h2>Login </h2>
            <p class="paragraph">Subdomain Takeover by buraaqsec</p>
            <div class="w-form">
               <form id="wf-form-Contact-Form" name="wf-form-Contact-Form" data-name="Wf Form Contact Form" method="get">
                  <div class="contact-form-grid">
                     <div id="w-node-f4cab429-e067-2e00-9c6c-79e5b457bb57-2de5abae"><label for="Email" id="contact-email">Email *</label><input type="email" class="w-input" maxlength="256" name="Email" data-name="Email" placeholder="" id="Email" required=""/></div>
                  </div>
                  <div id="w-node-f4cab429-e067-2e00-9c6c-79e5b457bb5b-2de5abae" class="div-block"><label for="Contact-Phone-Number" id="contact-phone">Password *</label></div>
                  <input type="password" class="text-field-2 w-input" autofocus="true" maxlength="256" name="Password" data-name="Password" placeholder="" id="Password" required=""/><input type="submit" value="Submit" data-wait="Please wait..." class="submit-button w-button"/>
               </form>
               <div class="w-form-done">
                  <div>Account Takeover !!</div>
               </div>
               <div class="w-form-fail">
                  <div>Oops! Something went wrong while submitting the form.</div>
               </div>
            </div>
         </div>

      <button onclick="javascript:alert(document.domain)" class="w-button">Click for XSS</button>
      <br />
      <br />
      <button onclick="javascript:alert(document.cookie)" class="w-button">Click for Cookies</button>
      <br />
      <br />
      <button onclick="page_redirect()" class="w-button">Redirect to evil.com</button>
      <br />
      <br />
      <button onclick="javascript:alert('Subdomain Takeover by buraaqsec')" class="w-button">Message</button>

      </section>
      <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=61f9deeb8692d52f0ee5abab" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
      <script src="https://uploads-ssl.webflow.com/61f9deeb8692d52f0ee5abab/js/webflow.ae265e1f1.js" type="text/javascript"></script>
      
      <script type = "text/javascript">  
         function page_redirect(){  
         window.location = "https://evil.com/";  
         }
      </script>
      </main>

      <Footer />
    </div>
  )
}
