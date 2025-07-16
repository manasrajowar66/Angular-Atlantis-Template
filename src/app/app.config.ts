import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { definePreset } from "@primeng/themes";
import { provideAnimations } from '@angular/platform-browser/animations';

const MyNeutralPreset = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: {
        primary: {
          50:  '{zinc.50}',
          100: '{zinc.100}',
          200: '{zinc.200}',
          300: '{zinc.300}',
          400: '{zinc.400}',
          500: '{zinc.500}', // Main Primary
          600: '{zinc.600}',
          700: '{zinc.700}',
          800: '{zinc.800}',
          900: '{zinc.900}',
        },
        surface: {
          0:    '#ffffff',
          50:   '{zinc.50}',
          100:  '{zinc.100}',
          200:  '{zinc.200}',
          300:  '{zinc.300}',
          400:  '{zinc.400}',
          500:  '{zinc.500}',
          600:  '{zinc.600}',
          700:  '{zinc.700}',
          800:  '{zinc.800}',
          900:  '{zinc.900}',
          950:  '{zinc.950}'
        },
        text: {
          base: '#1f2937', // zinc-800
          muted: '#6b7280', // zinc-500
          subtle: '#9ca3af' // zinc-400
        },
        accent: {
          500: '#6366f1', // Indigo 500 (can adjust to match branding)
          600: '#4f46e5'
        },
        border: {
          base: '#d1d5db', // zinc-300
          strong: '#9ca3af' // zinc-400
        }
      },
      dark: {
        primary: {
          50:  '{slate.50}',
          100: '{slate.100}',
          200: '{slate.200}',
          300: '{slate.300}',
          400: '{slate.400}',
          500: '{slate.500}', // Main Primary
          600: '{slate.600}',
          700: '{slate.700}',
          800: '{slate.800}',
          900: '{slate.900}',
        },
        surface: {
          0:    '#0f172a',  // slate-900
          50:   '{slate.50}',
          100:  '{slate.100}',
          200:  '{slate.200}',
          300:  '{slate.300}',
          400:  '{slate.400}',
          500:  '{slate.500}',
          600:  '{slate.600}',
          700:  '{slate.700}',
          800:  '{slate.800}',
          900:  '{slate.900}',
          950:  '{slate.950}'
        },
        text: {
          base: '#f1f5f9', // slate-100
          muted: '#94a3b8', // slate-400
          subtle: '#64748b' // slate-500
        },
        accent: {
          500: '#818cf8', // Indigo 400–500 (visible on dark)
          600: '#6366f1'
        },
        border: {
          base: '#334155', // slate-700
          strong: '#475569' // slate-600
        }
      }
    }
  }
});


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.dark',
          // order: 'app, tailwind, primeng',
        },
      },
      ripple: true
    }),
    provideAnimations()
  ],
};
