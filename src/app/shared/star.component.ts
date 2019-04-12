import { Component, OnChanges, Input } from "@angular/core";

@Component({
  selector: "pm-star",
  templateUrl: "./star.component.html",
  styleUrls: ["./star.component.css"]
})
export class StarComponent implements OnChanges {
  starWidth: number;
  @Input() rating: number = 4;
  ngOnChanges(): void {
    this.starWidth = (this.rating * 75) / 5;
  }
}
