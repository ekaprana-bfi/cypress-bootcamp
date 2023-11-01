import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import ExamplePage from '../../../pom/example-squad/example/examplePage';

When('I visit duckduckgo.com', () => {
  cy.visit('https://duckduckgo.com/');
});

Then('I should see a search bar', () => {
  ExamplePage.searchBar().should('be.visible');
});
