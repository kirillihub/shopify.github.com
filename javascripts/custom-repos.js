// Opt-in repos (case sensitive)
// - These are all children of Shopify and visible at https://github.com/Shopify
var optInRepos = [
  'FunctionalTableData',
  'Intro_to_GraphQL_Powered_by_Shopify',
  'active_fulfillment',
  'active_merchant',
  'active_shipping',
  'active_utils',
  'app_profiler',
  'asset_cloud',
  'browser_sniffer',
  'connect-googleapps',
  'draggable',
  'dukpt',
  'ejson2env',
  'embedded-app-example',
  'go-lua',
  'goluago',
  'goreferrer',
  'grizzly_ber',
  'hydrogen',
  'identity_cache',
  'js-buy-sdk',
  'kubeaudit',
  'liquid',
  'magnet',
  'minesweeper',
  'money',
  'omniauth-shopify-oauth2',
  'packwerk',
  'polaris-react',
  'polaris-icons',
  'pyreferrer',
  'rails_parallel',
  'rbi',
  'rbi-central',
  'react-native-skia',
  'rotoscope',
  'rubocop-sorbet',
  'ruby-lsp',
  'sarama',
  'semian',
  'shipit-engine',
  'shopify-css-import',
  'shopify-fulfillment-integration',
  'shopify_api',
  'shopify_app',
  'shopify_django_app',
  'shopify_python_api',
  'shopify_theme',
  'skeleton-theme',
  'slate',
  'splunk-auth-proxy',
  'spoom',
  'starter-theme',
  'statsd-instrument',
  'superdb',
  'sync_app_demo',
  'sysv_mq',
  'tapioca',
  'themekit',
  'theme-scripts',
  'toxiproxy',
  'toxiproxy-ruby',
  'tslint-config-shopify',
  'turbograft',
  'twine',
  'voucher',
  'vouch4cluster',
  'vscode-ruby-lsp',
  'vscode-shopify-ruby',
  'wolverine',
  'promise-kotlin',
  'promise-swift',
  'android-testify',
  'krane',
  'quilt',
  'graphql-tools-web'
];

// Add custom repos by full_name. Take the org/user and repo name
// - e.g. batmanjs/batman from https://github.com/batmanjs/batman
var customRepos = [];

// Custom repo language, different than that defined by GitHub
var customRepoLanguage = {
  liquid: 'Liquid',
  'starter-theme': 'Liquid',
  'skeleton-theme': 'Liquid',
  shopify_theme: 'Ruby',
  'Shopify-Developer-Book': 'Ruby',
  'offsite-gateway-sim': 'Ruby',
  'shopify.github.com': 'JavaScript',
  rotoscope: 'C'
};

// Custom repo avatars. Dimensions should be 40x40
// - Be sure a custom repo doesn't have the same name as a Shopify one, or a one will be overridden
var customRepoAvatar = {
  slate: '/images/repo-avatars/slate.svg',
  draggable: '/images/repo-avatars/draggable.png',
  superdb: '/images/repo-avatars/super-debugger.gif'
};
