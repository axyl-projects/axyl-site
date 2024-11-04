import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://axyl-projects.github.io/',
  base: '/axyl-site',
  integrations: [
    starlight({
      title: 'Athena OS',
      description: 'Athena OS, a new pentesting/cybersecurity linux distribution.',
      components: {
        TableOfContents: "./src/components/TOC.astro",
        PageTitle: "./src/components/CustomPageTitle.astro"
      },
      logo: {
        light: '/src/assets/athena-light.svg',
        dark: '/src/assets/athena-dark.svg',
      },
      customCss: process.env.NO_GRADIENTS ? [	'./axyl-site/src/styles/_global.css'] : ['./axyl-site/src/styles/landing.css', 	'./axyl-site/src/styles/_global.css'],
      social: {
        github: 'https://github.com/Athena-OS',
        instagram: 'https://www.instagram.com/athenaos_sec',
        discord: 'https://discord.gg/athena-os-977645785170714644',
      },
      editLink: {
        baseUrl: 'https://github.com/Athena-OS/athena-docs/tree/main/',
      },
      lastUpdated: true,
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Manifesto', link: '/axyl-site/en/getting-started/manifesto' },
            { label: 'Why Athena OS?', link: '/axyl-site/en/getting-started/athenaos' },
            { label: 'Downloading Athena OS', link: '/axyl-site/en/getting-started/download' },
          ],
        },
        {
          label: 'Installation',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Installation prepare', link: '/axyl-site/en/installation/prepare-install' },
            { label: 'Installing as single boot', link: '/axyl-site/en/installation/install-single-boot' },
            { label: 'Installing as dual boot with Linux or Windows', link: '/axyl-site/en/installation/install-dual-boot' },
            { label: 'Installing by NixOS', link: '/axyl-site/en/installation/install-nixos' },
            { label: 'Installing as persistent USB', link: '/axyl-site/en/installation/install-persistent-usb' },
            { label: 'Installing as guest in VMware', link: '/axyl-site/en/installation/install-guest-vmware' },
            { label: 'Installing as guest in VirtualBox', link: '/axyl-site/en/installation/install-guest-virtualbox' },
            { label: 'Installing as guest in Hyper-V', link: '/axyl-site/en/installation/install-guest-hyperv' },
            { label: 'Installing as guest in QEMU/KVM', link: '/axyl-site/en/installation/install-guest-qemu' },
            { label: 'Installing as guest in Quickemu', link: '/axyl-site/en/installation/install-guest-quickemu' },
            { label: 'Installing as guest in Parallels', link: '/axyl-site/en/installation/install-guest-parallels' },
            { label: 'Installing as guest in UTM', link: '/axyl-site/en/installation/install-guest-utm' },
            { label: 'Updating Athena OS', link: '/axyl-site/en/installation/update-athena' },
            { label: 'Aegis Installer TUI', link: '/axyl-site/en/installation/aegis-tui' },
          ],
        },
        {
          label: 'Configuration',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Athena Nix', link: '/axyl-site/en/configuration/nix-config' },
            // { label: 'Calamares Installer', link: '/axyl-site/en/configuration/calamares' },
            { label: 'Kernel', link: '/axyl-site/en/configuration/kernel' },
            { label: 'Shell', link: '/axyl-site/en/configuration/shell' },
            { label: 'Display Manager', link: '/axyl-site/en/configuration/display-manager' },
            { label: 'GNOME', link: '/axyl-site/en/configuration/gnome' },
            { label: 'Bspwm', link: '/axyl-site/en/configuration/bspwm' },
            { label: 'KDE Plasma', link: '/axyl-site/en/configuration/kde' },
            { label: 'MATE', link: '/axyl-site/en/configuration/mate' },
            { label: 'Cinnamon', link: '/axyl-site/en/configuration/cinnamon' },
            { label: 'XFCE', link: '/axyl-site/en/configuration/xfce' },
            { label: 'Hyprland', link: '/axyl-site/en/configuration/hyprland' },
            { label: 'NVIDIA GPU', link: '/axyl-site/en/configuration/nvidia' },
            { label: 'RDP', link: '/axyl-site/en/configuration/rdp' },
            { label: 'Repositories', link: '/axyl-site/en/configuration/repositories' },
            { label: 'Themes', link: '/axyl-site/en/configuration/themes' },
            { label: 'Utilities', link: '/axyl-site/en/configuration/utilities' },
          ],
        },
        {
          label: 'Cyber Resources',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Athena Welcome', link: '/axyl-site/en/resources/athena-welcome' },
            { label: 'Pentesting Tools', link: '/axyl-site/en/resources/pentesting-tools' },
            { label: 'Athena Cyber Hub', link: '/axyl-site/en/resources/cyber-hub' },
            { label: 'Hack The Box Toolkit', link: '/axyl-site/en/resources/htb-toolkit' },
            { label: 'PWNage Menu', link: '/axyl-site/en/resources/pwnage-menu' },
            { label: 'Blue Team Menu', link: '/axyl-site/en/resources/blueteam-menu' },
            { label: 'Red Team Menu', link: '/axyl-site/en/resources/redteam-menu' },
            { label: 'Payload to Dock', link: '/axyl-site/en/resources/payload-dock' },
            { label: 'Payload Environment Variables', link: '/axyl-site/en/resources/payload-variables' },
            { label: 'Browser Pentesting Resources', link: '/axyl-site/en/resources/browser-pentesting' },
            { label: 'NIST Feed', link: '/axyl-site/en/resources/nist-feed' },
            { label: 'Devotio', link: '/axyl-site/en/resources/devotio' },
          ],
        },
        //{
        //  label: 'Customization',
        //  items: [
        //    // Each item here is one entry in the navigation menu.
        //    { label: 'Customizing Shells', link: '/axyl-site/en/customization/shell' },
        //    { label: 'Customizing Display Managers', link: '/axyl-site/en/customization/display-manager' },
        //    { label: 'Customizing Terminal Tools', link: '/axyl-site/en/customization/terminal-tools' },
        //  ],
        //},
        {
          label: 'Containers',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Core Image', link: '/axyl-site/en/containers/core-image' },
            { label: 'RDP Image', link: '/axyl-site/en/containers/rdp-image' },
          ],
        },
        {
          label: 'Windows Subsystem for Linux',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'WSL Image', link: '/axyl-site/en/wsl/wsl' },
          ],
        },
        {
          label: 'Support',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Troubleshooting', link: '/axyl-site/en/support/troubleshooting' },
          ],
        },
        {
          label: 'Community',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Contribute to Athena', link: '/axyl-site/en/community/contribute' },
            { label: 'Getting Help', link: '/axyl-site/en/community/getting-help' },
            //{ label: 'Official Athena OS Mirrors', link: '/axyl-site/en/community/mirrors' },
            { label: 'Style Guide', link: '/axyl-site/en/community/style-guide' },
            { label: 'Setting up a Mirror', link: '/axyl-site/en/community/setting-mirror' },
            { label: 'Submitting Bugs', link: '/axyl-site/en/community/submitting-bugs' },
            { label: 'Submitting Themes', link: '/axyl-site/en/community/submitting-themes' },
            { label: 'Submitting Tools in Nix', link: '/axyl-site/en/community/submitting-tools-nix' },
            { label: 'Submitting Tools in Arch', link: '/axyl-site/en/community/submitting-tools-arch' },
          ],
        },
        {
          label: 'Development',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Testing', link: '/axyl-site/en/development/testing' },
          ],
        },
        {
          label: 'Policy',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Athena OS EULA', link: '/axyl-site/en/policy/eula-policy' },
            // { label: 'Athena OS Network Service Policy', link: '/axyl-site/en/policy/network-policy' },
            { label: 'Athena OS Code of Conduct', link: '/axyl-site/en/policy/code-of-conduct' },
            { label: 'Athena OS Collaboration Policy', link: '/axyl-site/en/policy/collaboration-policy' },
            { label: 'Athena OS Open Source Policy', link: '/axyl-site/en/policy/opensource-policy' },
            { label: 'Athena OS Package Policy', link: '/axyl-site/en/policy/package-policy' },
            { label: 'Athena OS Pentesting Tools Policy', link: '/axyl-site/en/policy/tools-policy' },
            { label: 'Athena OS Privacy Policy', link: '/axyl-site/en/policy/privacy-policy' },
            { label: 'Athena OS Update Policy', link: '/axyl-site/en/policy/update-policy' },
            { label: 'Athena OS User Policy', link: '/axyl-site/en/policy/user-policy' },
            // { label: 'Cookie Policy', link: '/axyl-site/en/policy/cookie-policy' },
          ],
        },
      ],
    }),
    react()
  ],

  // Process images with sharp: https://docs.astro.build/axyl-site/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
