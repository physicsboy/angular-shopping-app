import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';

import { MaterialModule} from './model/material';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProductThumbnailComponent } from './components/product-thumbnail/product-thumbnail.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';
import { ToolbarComponent } from './layout-component/toolbar/toolbar.component';
import { NavComponent } from './layout-component/nav/nav.component';
import { DashboardComponent } from './layout-component/dashboard/dashboard.component';
import { ExampleComponent } from './components/example/example.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProductThumbnailComponent,
    ProductPageComponent,
    CartPageComponent,
    ToolbarComponent,
    NavComponent,
    DashboardComponent,
    ExampleComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  entryComponents: [ProductPageComponent, CartPageComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
