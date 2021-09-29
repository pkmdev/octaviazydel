<?php
  wp_nav_menu(
    array(
      'theme_location' => 'main',
      'menu_id'        => 'main-menu',
    )
  );
?>
<div class="menu-social">

  <?php octaviazydel_social_display(); ?>
  <p class="menu-social-text">
    <span class="vertical-text">we are social</span>
  </p>
</div>
