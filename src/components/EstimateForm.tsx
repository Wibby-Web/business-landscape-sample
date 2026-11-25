import { useState, type FormEvent } from 'react';
import { ui } from '../i18n/ui';
import { useTranslations } from '../i18n/utils';
import type { Lang } from '../i18n/ui';
import { CheckIcon } from './icons';

export function EstimateForm({ currentLang }: { currentLang: Lang }) {
  const t = useTranslations(currentLang);
  const { projectOptions } = ui[currentLang];
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // Static sample site: no endpoint yet, just confirm locally.
    event.preventDefault();
    setSent(true);
  }

  return (
    <div className="rounded-[3px] bg-[#fcfbf7] p-6 text-ink shadow-[0_24px_60px_-32px_rgba(0,0,0,0.55)] sm:p-8">
      {sent ? (
        <div
          role="status"
          aria-live="polite"
          className="flex min-h-[420px] flex-col items-start justify-center py-6"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest/10 text-forest">
            <CheckIcon className="h-5 w-5" />
          </span>
          <h3 className="mt-5 text-[1.375rem] font-medium tracking-[-0.02em]">
            {t('form.successTitle')}
          </h3>
          <p className="mt-2 max-w-[36ch] text-[0.875rem] leading-relaxed text-ink/70">
            {t('form.successBody')}
          </p>
          <button
            type="button"
            onClick={() => setSent(false)}
            className="mt-6 text-[0.8125rem] font-medium text-forest underline decoration-forest/25 underline-offset-4 transition-colors hover:decoration-forest"
          >
            {t('form.successReset')}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <div>
              <label htmlFor="name" className="field-label">
                {t('form.name')}
                <span className="sr-only"> ({t('form.required')})</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                autoCapitalize="words"
                enterKeyHint="next"
                placeholder={t('form.namePlaceholder')}
                className="field"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="field-label">
                  {t('form.email')}
                  <span className="sr-only"> ({t('form.required')})</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  inputMode="email"
                  autoCapitalize="none"
                  spellCheck={false}
                  enterKeyHint="next"
                  placeholder={t('form.emailPlaceholder')}
                  className="field"
                />
              </div>
              <div>
                <label htmlFor="phone" className="field-label">
                  {t('form.phone')}
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  enterKeyHint="next"
                  placeholder={t('form.phonePlaceholder')}
                  className="field"
                />
              </div>
            </div>

            <div>
              <label htmlFor="project" className="field-label">
                {t('form.project')}
              </label>
              <div className="relative">
                <select
                  id="project"
                  name="project"
                  defaultValue=""
                  className="field appearance-none pr-10"
                >
                  <option value="">{t('form.projectPlaceholder')}</option>
                  {projectOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/60"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="field-label">
                {t('form.message')}
                <span className="sr-only"> ({t('form.required')})</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder={t('form.messagePlaceholder')}
                className="field resize-none"
              />
            </div>

            <button type="submit" className="btn btn-primary mt-1 w-full">
              {t('form.submit')}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
