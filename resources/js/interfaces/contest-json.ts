// Copyright (c) ppy Pty Ltd <contact@ppy.sh>. Licensed under the GNU Affero General Public License v3.0.
// See the LICENCE file in the repository root for full licence text.

import ContestEntryJson, { ContestEntryJsonForResults } from './contest-entry-json';
import ContestScoringCategoryJson from './contest-scoring-category-json';

interface ContestJsonAvailableIncludes {
  entries: ContestEntryJson[];
  max_judging_score: number;
  scoring_categories: ContestScoringCategoryJson[];
}

interface ContestJsonDefaultAttributes {
  id: number;
  name: string;
}

type ContestJson = ContestJsonDefaultAttributes & Partial<ContestJsonAvailableIncludes>;
export default ContestJson;

export type ContestJsonForResults = ContestJsonDefaultAttributes
& Required<Pick<ContestJsonAvailableIncludes, 'max_judging_score' | 'scoring_categories'>>
& {
  entires: ContestEntryJsonForResults;
};
