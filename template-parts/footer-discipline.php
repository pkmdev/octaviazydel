
<?php $postid = get_the_ID();
$meta = get_post_meta($postid); ?>
<div class="footer-get-in-touch">
  <p>get in touch</p>
  <input type="text" placeholder="name" />
  <input type="text" placeholder="email address" />
  <input type="text" placeholder="phone number" />
  <input type="text" placeholder="enquiring about" />
  <button>send</button>
</div>

<div class="footer-contact-us-toggle">
  <div class="contact-us-toggle" >
    <img src="<?php echo wp_get_attachment_image_url($meta['footer_thumbprint'][0], 'full'); ?>" alt="contact-us" />
  </div>
  <div class="contact-us-toggle-inner toggled" style="background: <?php echo ($meta['footer_color'][0] ? $meta['footer_color'][0] : $meta['footer_gradient'][0]); ?>"">
    <ul>
      <li><i class="icon-phone"></i>(+44) 07986 546329</li>
      <li><i class="icon-email"></i>info@octaviazydel.com</li>
      <li><i class="icon-location"></i>Offices in Manchester and London</li>
  </div>
</div>

<div class="footer-empty">

</div>
