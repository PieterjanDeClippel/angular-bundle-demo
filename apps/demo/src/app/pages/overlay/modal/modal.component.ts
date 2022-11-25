import { Component, Inject, TemplateRef } from '@angular/core';
import { Tag } from '../../../entities/tag';
import { TagService } from '../../../services/tag/tag.service';

@Component({
  selector: 'demo-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  constructor(private tagService: TagService) {
  }

  isOpen = false;
  tagSuggestions: Tag[] = [];
  selectedTags: Tag[] = [];

  onProvideTagSuggestions(search: string) {
    this.tagService.suggestTags(search, true).then((tags) => {
      if (tags) {
        this.tagSuggestions = tags;
      }
    });
  }
}
