<?php
/**
 * Parse.ly Content Helper Dashboard Widget class
 *
 * @package Parsely
 * @since   3.7.0
 */

declare(strict_types=1);

namespace Parsely\ContentHelper;

use Parsely\Parsely;

use const Parsely\PARSELY_FILE;

/**
 * Class that generates and manages the Content Helper Dashboard Widget.
 *
 * @since 3.7.0
 */
class Dashboard_Widget {

	/**
	 * Sets all the hooks that are needed in order to add the Dashboard Widget
	 * to the WordPress Dashboard.
	 *
	 * @since 3.7.0
	 */
	public function run() {
		add_action( 'wp_dashboard_setup', array( $this, 'add_dashboard_widget' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_assets' ) );
	}

	/**
	 * Adds the Widget and its contents to the WordPress Dashboard.
	 *
	 * @since 3.7.0
	 */
	public function add_dashboard_widget(): void {
		wp_add_dashboard_widget(
			'wp-parsely-dashboard-widget',
			__( 'Parse.ly Top Posts (Last 7 Days)', 'wp-parsely' ),
			'__return_empty_string' // Content will be populated by JavaScript.
		);
	}

	/**
	 * Enqueues the Dashboard Widget's assets.
	 *
	 * @since 3.7.0
	 *
	 * @param string $hook_suffix The current admin page.
	 */
	public function enqueue_assets( $hook_suffix ): void {
		if ( 'index.php' === $hook_suffix ) {
			$asset_php        = require_once plugin_dir_path( PARSELY_FILE ) . 'build/content-helper/dashboard-widget.asset.php';
			$built_assets_url = plugin_dir_url( PARSELY_FILE ) . 'build/content-helper/';

			wp_enqueue_script(
				'wp-parsely-dashboard-widget',
				$built_assets_url . 'dashboard-widget.js',
				$asset_php['dependencies'] ?? null,
				$asset_php['version'] ?? Parsely::VERSION,
				true
			);

			wp_enqueue_style(
				'wp-parsely-dashboard-widget',
				$built_assets_url . 'dashboard-widget.css',
				$asset_php['dependencies'] ?? null,
				$asset_php['version'] ?? Parsely::VERSION
			);
		}
	}

}
