/**
 * Fills template placeholders with user form data.
 * Supports composite placeholders such as {{fullName}}, {{currentDate}},
 * as well as direct key placeholders.
 */
export function fillTemplatePlaceholders(
  templateText: string,
  formData: Record<string, string>
): string {
  let result = templateText;

  // Compute composite full name
  const last = (formData.lastName || '').trim();
  const first = (formData.firstName || '').trim();
  const middle = (formData.middleName || '').trim();

  let compositeFullName = '';
  if (last || first) {
    compositeFullName = [last, first, middle].filter(Boolean).join(' ');
  }

  // Today's Uzbek formatted date
  const now = new Date();
  const uzbekMonths = [
    'yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun',
    'iyul', 'avgust', 'sentyabr', 'oktyabr', 'noyabr', 'dekabr'
  ];
  const formattedToday = `${now.getFullYear()}-yil ${now.getDate()}-${uzbekMonths[now.getMonth()]}`;

  // Replace fullName
  if (compositeFullName) {
    result = result.replaceAll('{{fullName}}', compositeFullName);
  } else {
    result = result.replaceAll('{{fullName}}', '_______________________________');
  }

  // Replace currentDate
  result = result.replaceAll('{{currentDate}}', formattedToday);

  // Replace all other fields
  for (const [key, value] of Object.entries(formData)) {
    const placeholder = `{{${key}}}`;
    const cleanValue = (value || '').trim();
    if (cleanValue) {
      result = result.replaceAll(placeholder, cleanValue);
    }
  }

  // Any remaining unmatched {{xyz}} placeholders can be replaced with clean underlined fill lines
  result = result.replace(/\{\{([a-zA-Z0-9_]+)\}\}/g, '____________________');

  return result;
}
