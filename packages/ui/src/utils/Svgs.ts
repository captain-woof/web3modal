import { svg } from 'lit'
import { color } from './Theme'

export const CLOSE_ICON = svg`
  <svg width="12" height="12" viewBox="0 0 12 12">
    <path
      d="M9.94 11A.75.75 0 1 0 11 9.94L7.414 6.353a.5.5 0 0 1 0-.708L11 2.061A.75.75 0 1 0 9.94 1L6.353 4.586a.5.5 0 0 1-.708 0L2.061 1A.75.75 0 0 0 1 2.06l3.586 3.586a.5.5 0 0 1 0 .708L1 9.939A.75.75 0 1 0 2.06 11l3.586-3.586a.5.5 0 0 1 .708 0L9.939 11Z"
      fill="#fff"
    />
  </svg>
`

export const NOISE_TEXTURE = svg`
  <svg id="w3m-transparent-noise">
    <filter id="w3m-noise">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" />
    </filter>

    <rect width="100%" height="100%" filter="url(#w3m-noise)" />
  </svg>
`

export const WALLET_CONNECT_ICON = svg`
  <svg width="28" height="20" viewBox="0 0 28 20">
    <g clip-path="url(#a)">
      <path
        d="M7.386 6.482c3.653-3.576 9.575-3.576 13.228 0l.44.43a.451.451 0 0 1 0 .648L19.55 9.033a.237.237 0 0 1-.33 0l-.606-.592c-2.548-2.496-6.68-2.496-9.228 0l-.648.634a.237.237 0 0 1-.33 0L6.902 7.602a.451.451 0 0 1 0-.647l.483-.473Zm16.338 3.046 1.339 1.31a.451.451 0 0 1 0 .648l-6.035 5.909a.475.475 0 0 1-.662 0L14.083 13.2a.119.119 0 0 0-.166 0l-4.283 4.194a.475.475 0 0 1-.662 0l-6.035-5.91a.451.451 0 0 1 0-.647l1.338-1.31a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0Z"
        fill="#000000"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#ffffff" d="M0 0h28v20H0z" /></clipPath>
    </defs>
  </svg>
`

export const WALLET_CONNECT_LOGO = svg`
  <svg width="178" height="29" viewBox="0 0 178 29">
    <path
      d="M10.683 7.926c5.284-5.17 13.85-5.17 19.134 0l.636.623a.652.652 0 0 1 0 .936l-2.176 2.129a.343.343 0 0 1-.478 0l-.875-.857c-3.686-3.607-9.662-3.607-13.348 0l-.937.918a.343.343 0 0 1-.479 0l-2.175-2.13a.652.652 0 0 1 0-.936l.698-.683Zm23.633 4.403 1.935 1.895a.652.652 0 0 1 0 .936l-8.73 8.543a.687.687 0 0 1-.956 0L20.37 17.64a.172.172 0 0 0-.239 0l-6.195 6.063a.687.687 0 0 1-.957 0l-8.73-8.543a.652.652 0 0 1 0-.936l1.936-1.895a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .239 0l6.195-6.064a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .24 0l6.195-6.064a.687.687 0 0 1 .956 0ZM48.093 20.948l2.338-9.355c.139-.515.258-1.07.416-1.942.12.872.258 1.427.357 1.942l2.022 9.355h4.181l3.528-13.874h-3.21l-1.943 8.523a24.825 24.825 0 0 0-.456 2.457c-.158-.931-.317-1.625-.495-2.438l-1.883-8.542h-4.201l-2.042 8.542a41.204 41.204 0 0 0-.475 2.438 41.208 41.208 0 0 0-.476-2.438l-1.903-8.542h-3.349l3.508 13.874h4.083ZM63.33 21.304c1.585 0 2.596-.654 3.11-1.605-.059.297-.078.595-.078.892v.357h2.655V15.22c0-2.735-1.248-4.32-4.3-4.32-2.636 0-4.36 1.466-4.52 3.487h2.914c.1-.891.734-1.426 1.705-1.426.911 0 1.407.515 1.407 1.11 0 .435-.258.693-1.03.792l-1.388.159c-2.061.257-3.825 1.01-3.825 3.19 0 1.982 1.645 3.092 3.35 3.092Zm.891-2.041c-.773 0-1.348-.436-1.348-1.19 0-.733.655-1.09 1.645-1.268l.674-.119c.575-.118.892-.218 1.09-.396v.912c0 1.228-.892 2.06-2.06 2.06ZM70.398 7.074v13.874h2.874V7.074h-2.874ZM74.934 7.074v13.874h2.874V7.074h-2.874ZM84.08 21.304c2.735 0 4.5-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922H81.92ZM94.92 21.146c.633 0 1.248-.1 1.525-.179v-2.18c-.218.04-.475.06-.693.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.338v-2.24h-2.338V7.788H91.47v3.448H89.37v2.24h2.1v4.201c0 2.3 1.15 3.469 3.45 3.469ZM104.62 21.304c3.924 0 6.302-2.299 6.599-5.608h-3.111c-.238 1.803-1.506 3.032-3.369 3.032-2.2 0-3.746-1.784-3.746-4.796 0-2.953 1.605-4.638 3.805-4.638 1.883 0 2.953 1.15 3.171 2.834h3.191c-.317-3.448-2.854-5.41-6.342-5.41-3.984 0-7.036 2.695-7.036 7.214 0 4.677 2.676 7.372 6.838 7.372ZM117.449 21.304c2.993 0 5.114-1.882 5.114-5.172 0-3.23-2.121-5.233-5.114-5.233-2.972 0-5.093 2.002-5.093 5.233 0 3.29 2.101 5.172 5.093 5.172Zm0-2.22c-1.327 0-2.18-1.09-2.18-2.952 0-1.903.892-2.973 2.18-2.973 1.308 0 2.2 1.07 2.2 2.973 0 1.862-.872 2.953-2.2 2.953ZM126.569 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.229-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM137.464 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.228-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM149.949 21.304c2.735 0 4.499-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922h-3.984ZM160.876 21.304c3.013 0 4.658-1.645 4.975-4.201h-2.874c-.099 1.07-.713 1.982-2.001 1.982-1.309 0-2.2-1.21-2.2-2.993 0-1.942 1.03-2.933 2.259-2.933 1.209 0 1.803.872 1.883 1.882h2.873c-.218-2.358-1.823-4.142-4.776-4.142-2.874 0-5.153 1.903-5.153 5.193 0 3.25 1.923 5.212 5.014 5.212ZM172.067 21.146c.634 0 1.248-.1 1.526-.179v-2.18c-.218.04-.476.06-.694.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.339v-2.24h-2.339V7.788h-2.854v3.448h-2.1v2.24h2.1v4.201c0 2.3 1.15 3.469 3.449 3.469Z"
      fill="#fff"
    />
  </svg>
`

export const WALLET_CONNECT_ICON_SHADE = svg`
  <svg width="108" height="60" viewBox="0 0 108 60">
    <g filter="url(#s)">
      <path
        d="M37.605 19.588c9.054-8.864 23.733-8.864 32.787 0l1.09 1.067a1.118 1.118 0 0 1 0 1.605l-3.728 3.65a.588.588 0 0 1-.82 0l-1.499-1.469c-6.316-6.184-16.556-6.184-22.873 0l-1.605 1.573a.588.588 0 0 1-.82 0l-3.727-3.65a1.118 1.118 0 0 1 0-1.605l1.195-1.17Zm40.496 7.548 3.317 3.248a1.118 1.118 0 0 1 0 1.605L66.46 46.635a1.177 1.177 0 0 1-1.64 0L54.204 36.24a.294.294 0 0 0-.41 0L43.178 46.635a1.177 1.177 0 0 1-1.64 0L26.58 31.989a1.118 1.118 0 0 1 0-1.606l3.318-3.248a1.177 1.177 0 0 1 1.639 0L42.153 37.53c.113.11.297.11.41 0l10.616-10.395a1.177 1.177 0 0 1 1.64 0L65.434 37.53c.113.11.297.11.41 0l10.617-10.394a1.177 1.177 0 0 1 1.639 0Z"
        fill="#fff"
      />
      <path
        d="M39.44 48.778 24.48 34.132a4.118 4.118 0 0 1 0-5.892l2.1 2.143-2.1-2.143 3.318-3.248m11.641 23.786L27.798 24.992m11.641 23.786a4.177 4.177 0 0 0 5.837 0L54 40.238l8.723 8.54 2.098-2.143m-25.38 2.143 25.38-2.143M27.798 24.992a4.177 4.177 0 0 1 5.837 0l8.723 8.54 8.722-8.54 2.099 2.143m-25.381-2.143 25.38 2.143m11.642 19.5-2.098 2.143a4.177 4.177 0 0 0 5.837 0l14.958-14.646a4.118 4.118 0 0 0 0-5.892L80.2 24.992a4.177 4.177 0 0 0-5.837 0l-8.723 8.54-8.723-8.54-2.08 2.123 2.08-2.123a4.177 4.177 0 0 0-5.837 0l2.099 2.143m11.641 19.5-11.641-19.5m11.657.918 2.099-2.143-2.1 2.143a3.589 3.589 0 0 0 5.018 0l3.728-3.65a4.118 4.118 0 0 0 0-5.892l-1.09-1.066c-10.22-10.007-26.764-10.007-36.984 0l-1.196 1.17a4.118 4.118 0 0 0 0 5.893l3.727 3.65a3.589 3.589 0 0 0 5.017 0l1.606-1.573c5.15-5.042 13.526-5.042 18.675 0l1.5 1.468Z"
        stroke="#fff"
        stroke-width="6"
      />
    </g>
    <defs>
      <filter
        id="s"
        x=".24"
        y="-13.06"
        width="107.518"
        height="86.027"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" />
        <feGaussianBlur stdDeviation="10" />
      </filter>
    </defs>
  </svg>
`

export const WALLET_CONNECT_ICON_GRADIENT = svg`
  <svg width="96" height="68" viewBox="0 0 96 68">
    <path
      d="M25.323 19.597c12.524-12.263 32.83-12.263 45.354 0l1.508 1.476a1.547 1.547 0 0 1 0 2.22l-5.157 5.048a.814.814 0 0 1-1.133 0l-2.075-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.174a.814.814 0 0 1-1.134 0l-5.156-5.048a1.547 1.547 0 0 1 0-2.22l1.655-1.62Zm56.018 10.44 4.59 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.268 0l-14.686-14.38a.407.407 0 0 0-.567 0L33.03 57.012a1.628 1.628 0 0 1-2.268 0L10.07 36.751a1.547 1.547 0 0 1 0-2.22l4.589-4.494a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"
      fill="#03ACDA"
    />
    <path
      d="M25.323 19.597c12.524-12.263 32.83-12.263 45.354 0l1.508 1.476a1.547 1.547 0 0 1 0 2.22l-5.157 5.048a.814.814 0 0 1-1.133 0l-2.075-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.174a.814.814 0 0 1-1.134 0l-5.156-5.048a1.547 1.547 0 0 1 0-2.22l1.655-1.62Zm56.018 10.44 4.59 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.268 0l-14.686-14.38a.407.407 0 0 0-.567 0L33.03 57.012a1.628 1.628 0 0 1-2.268 0L10.07 36.751a1.547 1.547 0 0 1 0-2.22l4.589-4.494a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"
      fill="url(#a)"
    />
    <path
      d="M25.323 19.597c12.524-12.263 32.83-12.263 45.354 0l1.508 1.476a1.547 1.547 0 0 1 0 2.22l-5.157 5.048a.814.814 0 0 1-1.133 0l-2.075-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.174a.814.814 0 0 1-1.134 0l-5.156-5.048a1.547 1.547 0 0 1 0-2.22l1.655-1.62Zm56.018 10.44 4.59 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.268 0l-14.686-14.38a.407.407 0 0 0-.567 0L33.03 57.012a1.628 1.628 0 0 1-2.268 0L10.07 36.751a1.547 1.547 0 0 1 0-2.22l4.589-4.494a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"
      fill="url(#b)"
    />
    <path
      d="M25.323 19.597c12.524-12.263 32.83-12.263 45.354 0l1.508 1.476a1.547 1.547 0 0 1 0 2.22l-5.157 5.048a.814.814 0 0 1-1.133 0l-2.075-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.174a.814.814 0 0 1-1.134 0l-5.156-5.048a1.547 1.547 0 0 1 0-2.22l1.655-1.62Zm56.018 10.44 4.59 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.268 0l-14.686-14.38a.407.407 0 0 0-.567 0L33.03 57.012a1.628 1.628 0 0 1-2.268 0L10.07 36.751a1.547 1.547 0 0 1 0-2.22l4.589-4.494a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"
      fill="url(#c)"
    />
    <path
      d="M25.323 19.597c12.524-12.263 32.83-12.263 45.354 0l1.508 1.476a1.547 1.547 0 0 1 0 2.22l-5.157 5.048a.814.814 0 0 1-1.133 0l-2.075-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.174a.814.814 0 0 1-1.134 0l-5.156-5.048a1.547 1.547 0 0 1 0-2.22l1.655-1.62Zm56.018 10.44 4.59 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.268 0l-14.686-14.38a.407.407 0 0 0-.567 0L33.03 57.012a1.628 1.628 0 0 1-2.268 0L10.07 36.751a1.547 1.547 0 0 1 0-2.22l4.589-4.494a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"
      fill="url(#d)"
    />
    <path
      d="M25.323 19.597c12.524-12.263 32.83-12.263 45.354 0l1.508 1.476a1.547 1.547 0 0 1 0 2.22l-5.157 5.048a.814.814 0 0 1-1.133 0l-2.075-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.174a.814.814 0 0 1-1.134 0l-5.156-5.048a1.547 1.547 0 0 1 0-2.22l1.655-1.62Zm56.018 10.44 4.59 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.268 0l-14.686-14.38a.407.407 0 0 0-.567 0L33.03 57.012a1.628 1.628 0 0 1-2.268 0L10.07 36.751a1.547 1.547 0 0 1 0-2.22l4.589-4.494a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"
      fill="url(#e)"
    />
    <path
      d="M25.323 19.597c12.524-12.263 32.83-12.263 45.354 0l1.508 1.476a1.547 1.547 0 0 1 0 2.22l-5.157 5.048a.814.814 0 0 1-1.133 0l-2.075-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.174a.814.814 0 0 1-1.134 0l-5.156-5.048a1.547 1.547 0 0 1 0-2.22l1.655-1.62Zm56.018 10.44 4.59 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.268 0l-14.686-14.38a.407.407 0 0 0-.567 0L33.03 57.012a1.628 1.628 0 0 1-2.268 0L10.07 36.751a1.547 1.547 0 0 1 0-2.22l4.589-4.494a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"
      fill="url(#f)"
    />
    <path
      d="M25.323 19.597c12.524-12.263 32.83-12.263 45.354 0l1.508 1.476a1.547 1.547 0 0 1 0 2.22l-5.157 5.048a.814.814 0 0 1-1.133 0l-2.075-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.174a.814.814 0 0 1-1.134 0l-5.156-5.048a1.547 1.547 0 0 1 0-2.22l1.655-1.62Zm56.018 10.44 4.59 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.268 0l-14.686-14.38a.407.407 0 0 0-.567 0L33.03 57.012a1.628 1.628 0 0 1-2.268 0L10.07 36.751a1.547 1.547 0 0 1 0-2.22l4.589-4.494a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0l14.686 14.38c.157.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"
      fill="url(#g)"
    />
    <path
      d="M25.672 19.954c12.33-12.072 32.326-12.072 44.656 0l1.507 1.476a1.047 1.047 0 0 1 0 1.506l-5.156 5.048a.314.314 0 0 1-.434 0l-2.075-2.03c-8.931-8.746-23.408-8.746-32.34 0l-2.221 2.174a.314.314 0 0 1-.435 0l-5.156-5.048a1.047 1.047 0 0 1 0-1.506l1.654-1.62Zm55.32 10.44 4.588 4.494a1.047 1.047 0 0 1 0 1.506l-20.692 20.26a1.128 1.128 0 0 1-1.568 0l-14.687-14.38a.907.907 0 0 0-1.266 0L32.68 56.655a1.128 1.128 0 0 1-1.568 0l-20.694-20.26a1.047 1.047 0 0 1 0-1.506l4.59-4.493a1.128 1.128 0 0 1 1.568 0l14.686 14.379a.907.907 0 0 0 1.267 0l-.35-.357.35.357 14.686-14.38a1.128 1.128 0 0 1 1.568 0l14.686 14.38a.907.907 0 0 0 1.267 0l14.686-14.38a1.128 1.128 0 0 1 1.568 0Z"
      stroke=${color().overlay.thin}
      stroke-width="1.5"
      fill="none"
    />
    <defs>
      <radialGradient
        id="a"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="rotate(-127.117 46.423 12.462) scale(23.2002 37.853)"
      >
        <stop stop-color="#70D75B" />
        <stop offset=".477" stop-color="#7CD94E" />
        <stop offset="1" stop-color="#7CD94E" stop-opacity="0" />
      </radialGradient>
      <radialGradient
        id="b"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(-6.00004 9.99997 -27.2315 -16.33906 53 29)"
      >
        <stop stop-color="#4567FB" />
        <stop offset=".924" stop-color="#4567FB" />
        <stop offset="1" stop-color="#4567FB" stop-opacity="0" />
      </radialGradient>
      <radialGradient
        id="c"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(-16.4999 23.00013 -57.24754 -41.06839 55.5 9)"
      >
        <stop stop-color="#C4397E" />
        <stop offset=".322" stop-color="#C6397F" />
        <stop offset="1" stop-color="#C6397F" stop-opacity="0" />
      </radialGradient>
      <radialGradient
        id="d"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(-12.99987 17.00005 -18.4666 -14.12134 76.5 29.5)"
      >
        <stop stop-color="#F651CC" />
        <stop offset=".681" stop-color="#F64ECC" />
        <stop offset="1" stop-color="#F64ECC" stop-opacity="0" />
      </radialGradient>
      <radialGradient
        id="e"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="rotate(135 31.583 22.748) scale(13.435 14.9028)"
      >
        <stop stop-color="#C251FB" />
        <stop offset=".873" stop-color="#C251FB" />
        <stop offset="1" stop-color="#C251FB" stop-opacity="0" />
      </radialGradient>
      <radialGradient
        id="f"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(24.49996 11.49999 -18.76319 39.97372 8.5 33)"
      >
        <stop stop-color="#8551EC" />
        <stop offset=".72" stop-color="#8551EC" />
        <stop offset="1" stop-color="#8551EC" stop-opacity="0" />
      </radialGradient>
      <radialGradient
        id="g"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(8.49998 8.99999 -14.68422 13.86842 26.5 18)"
      >
        <stop stop-color="#10937D" />
        <stop offset=".48" stop-color="#10937D" />
        <stop offset="1" stop-color="#10937D" stop-opacity="0" />
      </radialGradient>
    </defs>
  </svg>
`

export const COPY_ICON = svg`
  <svg width="14" height="14" viewBox="0 0 14 14">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.003 4.005c.012-1.225.074-1.936.391-2.491a3 3 0 0 1 1.12-1.12C6.204 0 7.136 0 9 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C14 2.204 14 3.136 14 5s0 2.795-.394 3.486a3 3 0 0 1-1.12 1.12c-.555.317-1.266.379-2.491.391l.002.003c-.012 1.222-.075 1.932-.391 2.486a3 3 0 0 1-1.12 1.12C7.796 14 6.864 14 5 14s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C0 11.796 0 10.864 0 9s0-2.795.394-3.486a3 3 0 0 1 1.12-1.12c.554-.316 1.264-.379 2.486-.391l.003.002ZM9 8.5c-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.045-.08-.113-.243-.154-.693C5.501 6.58 5.5 5.959 5.5 5c0-.959.001-1.58.043-2.05.04-.45.109-.613.154-.693a1.5 1.5 0 0 1 .56-.56c.08-.045.243-.113.693-.154C7.42 1.501 8.041 1.5 9 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.045.08.113.243.154.693.042.47.043 1.091.043 2.05 0 .959-.001 1.58-.043 2.05-.04.45-.109.613-.154.693a1.5 1.5 0 0 1-.56.56c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043ZM4 5.503a13.77 13.77 0 0 0-1.05.04c-.45.04-.613.109-.693.154a1.5 1.5 0 0 0-.56.56c-.045.08-.113.243-.154.693C1.501 7.42 1.5 8.041 1.5 9c0 .959.001 1.58.043 2.05.04.45.109.613.154.693a1.5 1.5 0 0 0 .56.56c.08.045.243.113.693.154.47.042 1.091.043 2.05.043.959 0 1.58-.001 2.05-.043.45-.04.613-.109.693-.154a1.5 1.5 0 0 0 .56-.56c.045-.08.113-.242.154-.693.025-.283.035-.619.04-1.05-1.534-.003-2.358-.037-2.983-.394a3 3 0 0 1-1.12-1.12c-.357-.625-.39-1.449-.394-2.983Z"
      fill="#fff"
    />
  </svg>
`

export const BACK_ICON = svg`
  <svg width="10" height="18" viewBox="0 0 10 18">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.735.179a.75.75 0 0 1 .087 1.057L2.92 8.192a1.25 1.25 0 0 0 0 1.617l5.902 6.956a.75.75 0 1 1-1.144.97L1.776 10.78a2.75 2.75 0 0 1 0-3.559L7.678.265A.75.75 0 0 1 8.735.18Z"
      fill="#fff"
    />
  </svg>
`
