# Angular-Homes-App

This project follows the [Build your first Angular app](https://angular.dev/tutorials/first-app) tutorial provided by the official Angular documentation. While the tutorial is a couple of years old, it still provides a solid foundation for understanding how Angular works, covering key concepts like components, services, data binding, and routing.

## Table of Contents

- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [App Structure & Key Concepts](#app-structure--key-concepts)
- [Acknowledgements](#acknowledgements)

## Demo

![Screenshot of home page](src/assets/home-page.png)

## Installation

### Install Angular CLI

Install Angular CLI globally:
```bash
npm install -g @angular/cli
```

### Download the Starter Code
Download the source code from the official tutorial repository:
[angular/codelabs - homes-app-start](https://github.com/angular/codelabs/tree/homes-app-start)

After downloading, navigate to the project directory:
```bash
cd House-List-Angular
```

### Install Dependencies
Install the required packages:
```bash
npm install
```

## Usage

### Run the Application
To start the development server:

```bash
ng serve
```
Then open your browser and navigate to http://localhost:4200.

### Generate a New Component
Use Angular CLI to generate standalone components with inline templates:

```bash
ng generate component Home --standalone --inline-template
```

Or shorthand:
```bash
ng g c details --standalone --inline-template
```

### Generate an Interface
```bash
ng generate interface housingLocation
```

### Generate a Service
```bash
ng generate service housing
```

### App Data & Styles
- App data can be copied from [here](https://gist.github.com/MarkTechson/efe8a9d4727ef33949b78812e66db082).
- Styles can be copied from [here](https://gist.github.com/MarkTechson/fa601fdc856d26b3bfa5030dae147f00).


## App Structure & Key Concepts

This project helps demonstrate the following Angular concepts:

1. **Standalone Components**:
Angular 17 introduced standalone components that simplify module management.

2. **Data Binding**:
Properties and events are bound between components and templates using Angular’s binding syntax.

3. **Services & Dependency Injection**:
The housing service fetches property listings and is injected into components for use.

4. **Routing**:
Navigate between components using Angular’s router setup.

5. **Interfaces**:
Interfaces define the shape of housing location objects for better type safety.

## Acknowledgements

- Tutorial provided by the Angular team: [Build your first Angular app](https://angular.dev/tutorials/first-app)