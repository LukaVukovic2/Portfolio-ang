import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TuiSidebar } from '@taiga-ui/addon-mobile';
import { TuiActiveZone, TuiRepeatTimes } from '@taiga-ui/cdk';
import { TuiButton, TuiLink, TuiRoot, TuiIcon, TuiSurface, TuiError, TuiSelect } from '@taiga-ui/core';
import { TuiCardLarge } from '@taiga-ui/layout';
import { TuiAccordion, TuiButtonClose } from '@taiga-ui/kit';
import { NgForOf } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SidebarDrawerComponent } from './sidebar-drawer/sidebar-drawer.component';
import { IntroductionSectionComponent } from './introduction-section/introduction-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { RecentProjectsSectionComponent } from './recent-projects-section/recent-projects-section.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { TuiInputModule, TuiInputSliderModule, TuiSelectModule, TuiTextareaModule } from '@taiga-ui/legacy';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    SidebarDrawerComponent,
    IntroductionSectionComponent,
    AboutSectionComponent,
    SkillsSectionComponent,
    RecentProjectsSectionComponent,
    ContactFormComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ...TuiSidebar,
    TuiActiveZone,
    TuiButton,
    TuiLink,
    ...TuiAccordion,
    NgForOf,
    TuiRoot,
    TuiButtonClose,
    TuiIcon,
    TuiCardLarge,
    TuiSurface,
    TuiRepeatTimes,
    TuiError,
    TuiInputModule,
    TuiInputSliderModule,
    TuiSelect,
    TuiSelectModule,
    TuiTextareaModule,
    FormsModule,
    TuiTextareaModule,
    TuiInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
