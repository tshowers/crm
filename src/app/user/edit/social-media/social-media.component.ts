import { Component, OnInit } from '@angular/core';
import { DataHandlerComponent } from 'src/app/shared/components/data-handler/data-handler.component';
import { environment } from 'src/environments/environment';
import { SocialMedia } from 'src/app/shared/data/social-media.model';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent extends DataHandlerComponent implements OnInit {

  public socialMedia = <SocialMedia>{
    name: '',
    url: ''
  };

  override onSubmit(): void {
    this.addSocialMedia();
  }

  addSocialMedia(): void {
    if (this.data.socialMedia && this.data.socialMedia.length)
      this.data.socialMedia.push(this.socialMedia);
    else
      this.addSocialMediaAfterAddingArray();

    super.onSubmit(environment.CONTACTS);

    this.socialMedia = <SocialMedia>{
      name: '',
      url: ''
    };
  }

  addSocialMediaAfterAddingArray(): void {
    this.data.socialMedia = [];
    this.data.socialMedia.push(this.socialMedia);

  }

  removeSocialMedia(at: number): void {
    this.data.socialMedia.splice(at, 1);
  }

  editSocialMedia(at: number): void {
    this.socialMedia = this.data.socialMedia[at];
    this.removeSocialMedia(at);
  }

}
