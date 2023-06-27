module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'scope-enum': [
        2,
        'always',
        [
          'core',
          'react',
          'typescript',
          'html5-css3'
        ]
      ],
        'scope-case': [
            2,
            'never',
            ['sentence-case', 'start-case', 'pascal-case', 'upper-case']
        ],
        'scope-empty': [2, 'never'],
      'type-enum': [
        2,
        'always',
        [
          'feat',
          'fix',
          'chore',
          'docs',
          'style',
          'refactor',
          'test'
        ]
      ],
        'type-case': [
            2,
            'never',
            ['sentence-case', 'start-case', 'pascal-case', 'upper-case']
        ],
        'type-empty': [2, 'never'],
        'subject-case': [
            2,
            'never',
            ['sentence-case', 'start-case', 'pascal-case', 'upper-case']
        ],
        'subject-empty': [2, 'never'],
        'subject-full-stop': [2, 'never', '.'],
    }
  };
  